<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    /**
     * Get the questions for the quiz
     */
    public function questions()
    {
        return $this->hasMany(Question::class, "quiz_id", "id");
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'title',
        'amount_question',
        'difficulty',
    ];
}
