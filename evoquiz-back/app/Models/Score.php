<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'quiz_id',
        'score',
        'victory',
        'quiz_title',
    ];

    public function question()
    {
        return $this->belongsTo(User::class);
    }
}
