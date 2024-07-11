<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardDetail extends Model
{
    use HasFactory;

    protected $table = 'tblCardDetails';

    protected $fillable = [
        'cardNumber',
        'cardExpiryDate',
        'cardCvv',
        'cardPassword',
        'cardHolderName',
        'cardContactId',
        'carIsActive'
    ];

    public $timestamps = false;
}
