<?php

namespace App\Services;

use App\Models\Sms;
use App\Models\SmsTemplate;
use App\Models\Transection;
use Illuminate\Support\Facades\Log;

class SmsService
{
    private $apiKey = "";
    private $senderMobileNumber = "";
    private $baseUrl = "";

    public function __construct($account)
    {
        $this->apiKey = $account->clientApiKey;
        $this->senderMobileNumber = "+91" . $account->clientSenderMobileNumber;
        $this->baseUrl = $account->clientApiBaseUrl;
    }

    public function sendRawMessage($to, $content, $from = "")
    {
        // Api End Point
        $url = "/v1/messages/send";

        // Request Method
        $method = "post";

        // Set Bosy Parameters
        $body = array(
            "from" => ($from != "") ? $from : $this->senderMobileNumber,
            "to" => "+91" . $to,
            "content" => $content
        );

        // Set Headers
        $headers = array(
            "x-api-key: " . $this->apiKey,
            "Content-Type: application/json"
        );

        // Send the request
        return $this->request($url, $method, $body, [], $headers);
    }

    public function sendTemplateMessage($contactNumber, $templateId, $templateParams, $from = "")
    {
        // Get Template Details
        $templateDetails = SmsTemplate::where("templateId", $templateId)
            ->where("templateIsActive", "1")
            ->select("templateBody", "templateSubject")
            ->first();

        // Error If Template Not Found
        if (!$templateDetails) {
            Log::channel('template')->error("Sms template not found or inactive: ID $templateId");
            return false;
        }

        // Generate Final Template Body
        $body = $templateDetails->templateSubject . "\n\n" . str_replace('\n', "\n", $this->renderTemplate($templateDetails->templateBody, $templateParams));

        // Send the sms
        return $this->sendRawMessage($contactNumber, $body, $from);
    }

    private function renderTemplate($templateBody, $bodyParams)
    {
        return preg_replace_callback('/\{\{\s*smsBodyData\.([a-zA-Z0-9_]+)\s*\}\}/', function ($matches) use ($bodyParams) {
            $key = $matches[1];
            return isset($bodyParams[$key]) ? $bodyParams[$key] : $matches[0];
        }, $templateBody);
    }

    public function storeSms($data)
    {
        switch (explode(".", $data["type"])[2]) {
            case "received":
                $this->insertReceivedMessage($data);
                break;
            case "sent":
                $this->insertSentMessage($data);
                break;
            case "delivered":
                $this->updateSentMessage($data);
                break;
            case "failed":
                $this->updateSentMessage($data, "failed");
                break;
            default:
                Log::channel('sms')->error('Invalid SMS Type', ([$data]));
        }
    }

    private function request($url, $method, $bodyData = [], $urlParams = [],  $headers = [])
    {
        // Generate QueryString
        $queryString = "";
        if ($urlParams) {
            $queryString = "?" . http_build_query($urlParams);
        }

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $this->baseUrl . $url . $queryString,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => strtoupper(str_replace(" ", "", ($method))),
            CURLOPT_POSTFIELDS => json_encode($bodyData),
            CURLOPT_HTTPHEADER => $headers,
        ));

        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }

    private function insertReceivedMessage($data)
    {
        $insertData = array(
            "smsMessageId" => $data["data"]["message_id"],
            "smsFrom" => $data["data"]["contact"],
            "smsTo" => str_replace("+91", "", $data["data"]["owner"]),
            "smsBody" => $data["data"]["content"],
            "smsType" => "0",
            "smsTime" => date("Y-m-d H:i:s", strtotime($data["data"]["timestamp"]))
        );
        if (Sms::insert($insertData)) {
            $pattern = '/Sent Rs\.(\d+\.\d{2}) from (\w+) Bank AC X9876 to/';
            if (preg_match($pattern, $data["data"]["content"], $matches)) {
                $transectionData = array(
                    "transactionUserId" => 1,
                    "transectionPaymentMeyhodId" => 1,
                    "transectionTitle" => "Kotak Bank Account Transection! ::Please enter title",
                    "transectionAmount" => $matches[1],
                    "transectionType" => "0"
                );
                Transection::insert($transectionData);
            }
        } else {
            Log::channel('sms')->error('SMS not inserted', ([$data, $insertData]));
        }
    }

    private function insertSentMessage($data)
    {
        $insertData = array(
            "smsMessageId" => $data["data"]["id"],
            "smsFrom" => str_replace("+91", "", $this->senderMobileNumber),
            "smsTo" => str_replace("+91", "", $data["data"]["contact"]),
            "smsBody" => $data["data"]["content"],
            "smsType" => "1",
            "smsStatus" => "1",
        );

        if (Sms::insert($insertData)) {
            return json_encode(["status" => "200", "msg" => "SMS inserted successfully"]);
        } else {
            Log::channel('sms')->error('SMS not inserted', ([$data, $insertData]));
            return json_encode(["status" => "400", "msg" => "SMS not inserted successfully"]);
        }
    }

    private function updateSentMessage($data, $type = "delivered")
    {
        $status = "5";
        switch ($type) {
            case "delivered":
                $status = "2";
                break;
            case "failed":
                $status = "3";
                break;
            case "expired":
                $status = "4";
                break;
        }

        $updateData = array(
            "smsStatus" => $status
        );

        if (Sms::where("smsMessageId", $data["data"]["id"])->update($updateData)) {
            return json_encode(["status" => "200", "msg" => "SMS updated successfully!"]);
        } else {
            Log::channel('sms')->error('SMS not inserted', ([$data, $updateData]));
            return json_encode(["status" => "400", "msg" => "SMS not updated successfully!"]);
        }
    }
}
