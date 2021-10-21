<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $user = new User;

        $user->auth0_id = $request->user_id;
        $user->email = $request->email;

        $user->save();

        return($request);
    }
}
