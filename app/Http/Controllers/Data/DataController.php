<?php

namespace App\Http\Controllers\Data;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function getContactDetails()
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
}
