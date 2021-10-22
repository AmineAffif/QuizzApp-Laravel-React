<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\Score;
use App\Models\User;
use Illuminate\Http\Request;

class ScoreController extends Controller
{


    public function getAllQuizScore(Request $request)
    {

        $user = User::where('auth0_id', '=', $request->user_id)->first();

        $scores = Score::where('user_id', '=', $request->user_id)
        ->selectRaw(" MIN(user_id) AS user_id, MAX(score) AS score, quiz_id, MAX(quiz_title) AS quiz_title, MAX(victory) AS victory")
        ->groupBy('quiz_id')
        ->get();
            
        return (["scores" => $scores]);
    }



    public function getQuizScore(Request $request)
    {

        $user = User::where('auth0_id', '=', $request->user_id)->first();

        $score = new Score;
        $score = $score->where([
            ['quiz_id', '=', $request->quiz_id],
            ['user_id', '=', $request->user_id],
        ])
            ->orderBy('created_at', 'desc')
            ->first();

        $maxScore = Score::where([
            ['quiz_id', '=', $request->quiz_id],
            ['user_id', '=', $request->user_id],
        ])
            ->max("score");

        $quiz = Quiz::where('id', '=', $score->quiz_id)->first();

        return (["score" => $score, "quiz" => $quiz, "maxScore" => $maxScore]);
    }

    public function storeScore(Request $request)
    {

        $user = User::where('auth0_id', '=', $request->user_id)->first();

        $score = new Score;

        $score->user_id = $user->auth0_id;
        $score->quiz_id = $request->quiz_id;
        $score->victory = $request->victory;
        $score->score = $request->user_score;
        $score->quiz_title = $request->quiz_title;

        $score->save();

        return json_encode($score);
    }
}
