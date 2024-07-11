<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetail extends Model
{
    use HasFactory;

    protected $table = 'tblBankDetails';

    protected $fillable = [
        'bankName',
        'bankAccountNumber',
        'bankAddress',
        'bankIfscCode',
        'bankAccountMinimumAmount',
        'bankAccountBalance',
        'bankContactId',
        'bankAccountIsActive'
    ];

    public $timestamps = false;
}
