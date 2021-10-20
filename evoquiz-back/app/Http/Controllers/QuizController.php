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

        // Get only the questions for a quiz
        // $questionsOnly = Quiz::find(1)->questions;

        // Get quiz info + questions
        // $quizQuestions = Quiz::with('questions')->get();
        
        // Get quiz info + questions + questions answers
        $quizQuestionsAnswers = Quiz::with('questions.answers')->get();

        return (json_encode($quizQuestionsAnswers));
        
    }
}
