<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $answers = array(
            1 => "la mer noire",
            2 => "42",
            3 => "La canicule",
            4 => "Pfizer"
        );

        for ($question = 1; $question <= 10; $question++) {
            for ($answer = 1; $answer <= 4; $answer++) {
                if ($answer == 4) {
                    DB::table("answers")->insert([
                        "question_id" => $question,
                        "content" => $answers[4],
                        "right_answer" => true,
                    ]);
                }
                DB::table("answers")->insert([
                    "question_id" => $question,
                    "content" => $answers[$answer],
                    "right_answer" => false,
                ]);
            }
        }
    }
}
