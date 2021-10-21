<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Score;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class UserController extends Controller
{
    public function store(Request $request)
    {

        if ((User::where('auth0_id', '=', $request->user_id)->exists()) || (User::where('email', '=', $request->user_mail)->exists())) {
            // user already exists
            return "User already stored";
        } else {
            $user = new User;

            $user->auth0_id = $request->user_id;
            $user->email = $request->user_mail;

            $user->save();
        }

        return ($request);
    }


    
    
}
