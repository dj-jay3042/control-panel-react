<?php

namespace App\Http\Controllers\Sms;

use App\Http\Controllers\Controller;
use App\Models\Sms;
use App\Models\SmsClient;
use App\Services\SmsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SmsController extends Controller
{
    private $smsService;
    public function __construct()
    {
        $account = SmsClient::where("clientIsActive", "1")->first();
        $this->smsService = new SmsService($account);
    }
    public function storeSms(Request $request)
    {
        $data = $request->all();
        $response = $this->smsService->storeSms($data);
        return $response;
    }

    public function sendRawSms(Request $request)
    {
        $to = $request->input("to");
        $content = $request->input("content");
        $response = $this->smsService->sendRawMessage($to, $content);
        return $response;
    }

    public function getSms(): JsonResponse
    {
        $smsData = Sms::all();
        // echo "<pre>";
        $userMessages = [];
        foreach ($smsData as $sms) {
            $userId = ($sms->smsType == 0) ? $sms->smsFrom : $sms->smsTo;

            if (!isset($userMessages[$userId])) {
                $userMessages[$userId] = [
                    'userId' => $userId,
                    'name' => ($sms->smsType == 0) ? $sms->smsFrom : $sms->smsTo,
                    'path' => "/assets/images/auth/user.png",
                    'time' => date('g:i A', strtotime($sms->smsTime)),
                    'preview' => $sms->smsBody,
                    'messages' => [],
                    'active' => true,
                ];
            }

            $userMessages[$userId]['messages'][date("d M, Y", strtotime($sms->smsTime))][] = [
                'fromUserId' => $sms->smsTo,
                'toUserId' => $sms->smsFrom,
                'text' => $sms->smsBody,
            ];
        }

        return response()->json(array_values($userMessages), 200);
    }
}
