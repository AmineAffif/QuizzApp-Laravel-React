<?php

use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\QuizController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/allQuiz', [HomeController::class, "allQuiz"]);
Route::post('/quiz/{id}', [QuizController::class, "quiz"]);