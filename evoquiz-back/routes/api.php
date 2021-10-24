<?php

use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\QuizController;
use App\Http\Controllers\API\ScoreController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ResumeGameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/allQuiz', [HomeController::class, "allQuiz"]);
Route::post('/quiz/{id}', [QuizController::class, "quiz"]);

Route::post('/sendUser', [UserController::class, "store"]);

Route::post('/sendUserScore', [ScoreController::class, "storeScore"]);

Route::post('/getQuizScore', [ScoreController::class, "getQuizScore"]);
Route::post('/getAllQuizScore', [ScoreController::class, "getAllQuizScore"]);

Route::post('/getUserRole', [UserController::class, "getUserRole"]);

Route::post('/resumeGame', [ResumeGameController::class, "resumeGame"]);