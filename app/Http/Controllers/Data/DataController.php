<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use App\Models\BankDetail;
use App\Models\SmsClient;
use App\Models\Visitor;
use App\Services\SmsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function getContactDetails(): JsonResponse
    {
        $data = DB::table("tblContact")->orderBy("cTime", "DESC")->get();
        $return = array();
        $count = 0;
        foreach ($data as $row) {
            $details = array(
                "id" => ++$count,
                "email" => $row->email,
                "name" => $row->name,
                "message" => $row->message,
                "time" => date("d M, Y h:i:s a", strtotime($row->cTime . " + 9:30"))
            );
            $return[] = $details;
        }
        return response()->json($return);
    }

    public function getVisits(): JsonResponse
    {
        $visitCounts = Visitor::select(DB::raw('DATE(visitedDate) as visitedDate'), DB::raw('count(*) as visit_count'))
            ->groupBy(DB::raw('DATE(visitedDate)'))
            ->orderBy('visitedDate', 'DESC')
            ->take(10)
            ->get();

        return response()->json($visitCounts);
    }

    public function getBotVisits(): JsonResponse
    {
        $botVisitCounts = Visitor::select(DB::raw('DATE(visitedDate) as visitedDate'), DB::raw('count(*) as visit_count'))
            ->where("os", "0")
            ->orWhere("device", "Bot", "LIKE")
            ->groupBy(DB::raw('DATE(visitedDate)'))
            ->orderBy('visitedDate', 'DESC')
            ->take(10)
            ->get();

        return response()->json($botVisitCounts);
    }

    public function getVisitorOs(): JsonResponse
    {
        $visitorsOs = Visitor::select('os', DB::raw('count(*) as count'))
            ->groupBy('os')
            ->get();

        $data = collect($visitorsOs);
        $total = $data->sum("count");
        $return = array();
        $return["other"]["percentage"] = 0;
        foreach ($visitorsOs as $os) {
            switch ($os->os) {
                case "OS X":
                    $return[str_replace(" ", "_", strtolower($os->os))]["percentage"] = round(($os->count / $total) * 100, 2);
                    break;
                case "Windows":
                    $return[str_replace(" ", "_", strtolower($os->os))]["percentage"] = round(($os->count / $total) * 100, 2);
                    break;
                case "Linux":
                    $return[str_replace(" ", "_", strtolower($os->os))]["percentage"] = round(($os->count / $total) * 100, 2);
                    break;
                default:
                    $return["other"]["percentage"] += round(($os->count / $total) * 100, 2);
                    break;
            }
        }
        return response()->json($return);
    }

    public function getBankBalance(): JsonResponse
    {
        $balanceData = BankDetail::select(DB::raw("SUM(bankAccountBalance) as totalBalance"))->where("bankAccountIsActive", "1")->first();
        return response()->json(["bankBalance" => $balanceData->totalBalance], 200);
    }

    public function updateBankBalance(Request $request): JsonResponse
    {
        $updatedBalance = $request->input("newBankBalance");
        BankDetail::where("bankId", 1)->update(["bankAccountBalance" => $updatedBalance]);

        $templateData = array(
            "name" => "Jay Chauhan",
            "accountNumber" => "KOTAK X 9876",
            "currentBalance" => $updatedBalance
        );
        // Send sms for update
        $account = SmsClient::where("clientIsActive", "1")->first();
        $smsService = new SmsService($account);
        $smsService->sendTemplateMessage("9313190741", 2, $templateData);
        return response()->json(["message" => "Balance Updated Successfully!"], 200);
    }
}
