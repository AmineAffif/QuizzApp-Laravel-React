<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResumeGameController extends Controller
{
    public function resumeGame(Request $request)
    {
        // Get quiz info
        // $quiz = Quiz::find($id);

        // Get only the questions for one quiz
        // $questionsOnly = Quiz::find($id)->questions;

        // Get quiz info + questions for one quiz
        // $quizQuestions = Quiz::with('questions')
        // ->where("quizzes.id", $id)
        // ->get();
        
        

        return ($request);
    }
}
