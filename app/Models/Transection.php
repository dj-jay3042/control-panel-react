<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transection extends Model
{
    use HasFactory;

    protected $table = 'tblTransections';

    protected $fillable = [
        'transactionUserId',
        'transectionPaymentMeyhodId',
        'transectionTitle',
        'transectionAmount',
        'transectionType'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'transactionUserId', 'userId');
    }
}
