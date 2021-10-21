<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scores', function (Blueprint $table) {
            $table->id();
            $table->string("user_id");
            $table->foreign("user_id")->references('auth0_id')->on('users')->onDelete('cascade');
            $table->integer("quiz_id");
            $table->foreign("quiz_id")->references('id')->on('quizzes')->onDelete('cascade');
            $table->boolean("victory");
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
        Schema::dropIfExists('scores');
    }
}
