<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UpiDetail extends Model
{
    use HasFactory;

    protected $table = 'tblUpiDetails';

    protected $fillable = [
        'upiName',
        'upiAppName',
        'upiUpiId',
        'upiPassword',
        'upiContactId',
        'upiIsActive'
    ];

    public $timestamps = false;
}
