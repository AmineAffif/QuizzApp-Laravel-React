<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function quiz($id)
    {
        // Get quiz info
        // $quiz = Quiz::find($id);

        // Get only the questions for one quiz
        // $questionsOnly = Quiz::find($id)->questions;

        // Get quiz info + questions for one quiz
        // $quizQuestions = Quiz::with('questions')
        // ->where("quizzes.id", $id)
        // ->get();
        
        // Get quiz info + questions + answers for one quiz
        $quizQuestionsAnswers = Quiz::with('questions.answers')
        ->where("quizzes.id", $id)
        ->get();

        return (json_encode($quizQuestionsAnswers));
    }
}
