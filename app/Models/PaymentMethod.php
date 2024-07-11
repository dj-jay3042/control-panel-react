<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;

    protected $table = 'tblPaymentMethods';

    protected $fillable = [
        'paymentMethodName',
        'paymentMethodType',
        'paymentMethodCharge',
        'paymentMethodBankId',
        'paymentMethodIsActive'
    ];

    public $timestamps = false;

    public function bankDetail()
    {
        return $this->belongsTo(BankDetail::class, 'paymentMethodBankId', 'bankId');
    }
}
