<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function quiz($id)
    {
        // Get a quiz
        $quiz = Quiz::find($id);

        // Get questions for a quiz
        // $questions = Question::where("quizId", $id);


        $questions = Question::find(1)->questions;


        return (json_encode($questions));

        // Get answers for a question
        
    }
}
