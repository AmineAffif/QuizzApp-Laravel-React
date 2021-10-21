<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table("quizzes")->insert([
                "title" => file_get_contents("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1&format=text"),
                "amount_question" => 3,
            ]);
        }
        
    }
}
