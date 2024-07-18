<?php

use App\Http\Controllers\Data\DataController;
use App\Http\Controllers\Route\RouteController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\Menu\MenuController;
use App\Http\Controllers\Sms\SmsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get("routes", [RouteController::class, "getRoutes"]);
Route::post("sendOtp", [LoginController::class, "sendOtp"]);
Route::post("login", [LoginController::class, "login"]);
Route::post("getMenuItems", [MenuController::class, "getMenuItems"]);
Route::post("storeSms", [SmsController::class, "storeSms"]);
Route::post("sendSms", [SmsController::class, "sendRawSms"]);
Route::middleware('checkAccessToken')->group(function () {
    Route::get("getVisits", [DataController::class, "getVisits"]);
    Route::get("getBotVisits", [DataController::class, "getBotVisits"]);
    Route::get("getVisitorOs", [DataController::class, "getVisitorOs"]);
    Route::get("getBankBalance", [DataController::class, "getBankBalance"]);
    Route::get("getSms", [SmsController::class, "getSms"]);
    Route::post("updateBankBalance", [DataController::class, "updateBankBalance"]);
    Route::post("contactData", [DataController::class, "getContactDetails"]);
});
