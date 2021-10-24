<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ResumeGameController extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resume_game', function (Blueprint $table) {
            $table->id();
            $table->string("auth0_id");
            $table->foreign("auth0_id")->references('auth0_id')->on('users')->onDelete('cascade');
            $table->integer("quiz_id");
            $table->foreign("quiz_id")->references('id')->on('quizzes')->onDelete('cascade');
            $table->integer("last_score");
            $table->integer("last_question_position");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
