<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVerificationDetail extends Model
{
    use HasFactory;

    protected $table = 'tblUserVerificationDetails';

    protected $fillable = [
        'verificationUserId',
        'verificationType',
        'verificationKeyType',
        'verificationValue',
        'verificationStatus'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'verificationUserId', 'userId');
    }
}
