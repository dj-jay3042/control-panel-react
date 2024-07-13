<?php

namespace App\Http\Controllers\Sms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SmsController extends Controller
{
    public function storeSms(Request $request)
    {
        Log::channel('sms')->info('SMS got successfully', ($request->all()));
    }
}
