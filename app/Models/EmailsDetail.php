<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailsDetail extends Model
{
    use HasFactory;

    protected $table = 'tblEmailsDetails';

    protected $fillable = [
        'emailAddress',
        'emailIsActive',
        'contactId'
    ];

    public $timestamps = false;

    public function contact()
    {
        return $this->belongsTo(Contact::class, 'contactId', 'contactId');
    }
}
