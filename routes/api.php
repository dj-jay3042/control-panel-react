<?php

use App\Http\Controllers\Data\DataController;
use App\Http\Controllers\Route\RouteController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\Menu\MenuController;
use Illuminate\Http\Request;
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
Route::middleware('checkAccessToken')->group(function () {
    Route::post("contactData", [DataController::class, "getContactDetails"]);
});
