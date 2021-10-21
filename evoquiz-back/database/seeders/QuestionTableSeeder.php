<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($quiz = 1; $quiz <= 10; $quiz++) {
            for ($question = 1; $question <= 3; $question++) {
                DB::table("questions")->insert([
                    "quiz_id" => $quiz,
                    "content" => file_get_contents("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1&format=text"),
                ]);
            }
        }
    }
}
