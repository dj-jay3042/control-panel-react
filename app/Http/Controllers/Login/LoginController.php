<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\MailService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        // Validate the request
        $request->validate([
            'username' => 'required',
            'password' => 'required|string|min:8|max:16',
            'otp' => 'required|digits:6',
        ]);

        // Attempt to login
        $credentials = $request->only('username', 'password', 'otp');

        // Get User Details
        $user = User::where("userLogin", $credentials["username"])->select("userPassword", "userAccessToken", "userRefreshToken", "userLoginOtp")->first();

        if ($user) {
            // Validate User
            if (sha1($credentials["password"]) === $user->userPassword) {
                if ($credentials["otp"]) {
                    $return = array(
                        "accessToken" => $user->userAccessToken,
                        "refreshToken" => $user->userRefreshToken
                    );
                    return response()->json($return, 200);
                } else {
                    return response()->json(["message" => "Incorrect OTP!"], 401);
                }
            }
            return response()->json(["message" => "Incorrect Password!"], 401);
        }
        return response()->json(["message" => "Incorrect Username!"], 401);
    }

    public function sendOtp(Request $request): JsonResponse
    {
        // Validate the request
        $request->validate([
            'username' => 'required',
            'password' => 'required|string|min:8',
        ]);

        // Attempt to login
        $credentials = $request->only('username', 'password');

        $user = User::where("userLogin", $credentials["username"])->select("userId", "userPassword", "userAccessToken", "userRefreshToken", "userLoginOtp", "userEmail", "userLogin")->first();
        if ($user) {
            // Validate User
            if (sha1($credentials["password"]) === $user->userPassword) {
                $otp = mt_rand(100000, 999999); // Generate Otp
                // Regenerate otp is the generated otp is same as the last otp
                while ($otp == $user->userLoginOtp) {
                    $otp = mt_rand(100000, 999999); // Generate Otp
                }

                // Update the otp in the database and send mail for otp
                User::where("userId", $user["userId"])->update(["userLoginOtp" => $otp]);
                // TODO: Send mail for otp
                $mail = new MailService();
                $otpSent = $mail->sendMail($user->userEmail, 1, ["loginId" => $user->userLogin, "otp" => $otp]);
                return response()->json(["otpSent" => $otpSent], 200);
            }
            return response()->json(["message" => "Incorrect Password!"], 401);
        }
        return response()->json(["message" => "Incorrect Username!"], 401);
    }
}
