<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\Score;
use App\Models\User;
use Illuminate\Http\Request;

class ScoreController extends Controller
{
    public function getQuizScore(Request $request)
    {
        
        $user = User::where('auth0_id', '=', $request->user_id)->first();

        $score = new Score;
        $score = $score->where('quiz_id', '=', $request->quiz_id)->where('user_id', '=', $request->user_id)->first();

        $quiz = Quiz::where('id', '=', $score->quiz_id)->first();

        return (["score" => $score, "quiz" => $quiz]);
    }
    public function storeScore(Request $request)
    {

            $user = User::where('auth0_id', '=', $request->user_id)->first();

            $score = new Score;

            $score->user_id = $user->auth0_id;
            $score->quiz_id = $request->quiz_id;
            $score->victory = $request->victory;
            $score->score = $request->user_score;
            
            $score->save();
        
        return json_encode($score);
    }
}
