<?php

namespace App\Services;

use App\Models\EmailTemplate;
use App\Mail\MailSender;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Exception;


class MailService {
    public function sendMail($emailAddress, $emailTemplateId, $bodyParams = []) {
        try {
            $templateDetails = EmailTemplate::where("templateId", $emailTemplateId)
                                            ->where("templateIsActive", "1")
                                            ->select("templateBody", "templateSubject")
                                            ->first();

            if (!$templateDetails) {
                Log::error("Email template not found or inactive: ID $emailTemplateId");
                return false;
            }

            $emailBody = $this->renderTemplate($templateDetails->templateBody, $bodyParams);
            $emailSubject = $templateDetails->templateSubject;

            // Send the email
            Mail::to($emailAddress)->send(new MailSender($emailSubject, $emailBody));

            return true;
        } catch (Exception $e) {
            Log::error("Error sending email: " . $e->getMessage());
            return false;
        }
    }

    private function renderTemplate($templateBody, $bodyParams) {
        return preg_replace_callback('/\{\{\s*mailBodyData\.([a-zA-Z0-9_]+)\s*\}\}/', function($matches) use ($bodyParams) {
            $key = $matches[1];
            return isset($bodyParams[$key]) ? $bodyParams[$key] : $matches[0];
        }, $templateBody);
    }
}