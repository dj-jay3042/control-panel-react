<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\JsonResponse;
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
                "time" => $row->cTime
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
}
