<?php

namespace App\Http\Controllers\Sms;

use App\Http\Controllers\Controller;
use App\Models\Sms;
use App\Models\SmsClient;
use App\Models\Transection;
use App\Services\SmsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
}
