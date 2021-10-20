<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Quiz;


class HomeController extends Controller
{
    public function index(Request $request)
    {
        return $request;
    }

    public function allQuiz()
    {
        // Get all quiz basic info
        $quiz = Quiz::all();
        return (json_encode($quiz));
    }
}
