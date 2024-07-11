<?php

namespace App\Http\Controllers\Route;

use App\Http\Controllers\Controller;
use App\Models\Route;

class RouteController extends Controller
{
    public function getRoutes()
    {
        $routes = Route::where("routeIsPrivate", "1")->get();
        $return = array();
        foreach ($routes as $route) {
            $return[] = array(
                "path" => $route->routeUrl,
                "element" => $route->routeComponentName,
                "layout" => (($route->routeTarget == '1') ? "blank" : ""),
                "componentLocation" => $route->routeComponentLocation,
                "isPrivate" => ($route->routeIsPrivate == "1") ? true : false
            );
        }

        return response()->json($return);
    }
}
