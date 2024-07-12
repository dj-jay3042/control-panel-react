<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ValidateUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the access token is present in the headers
        if (!$request->hasHeader('accessToken')) {
            // If not, return a 401 Unauthorized response
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Proceed with the request
        return $next($request);
    }
}
