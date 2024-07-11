<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'tblContacts';

    protected $fillable = [
        'contactFirstName',
        'contactLastName',
        'contactPhoneNumber',
        'contactWhatsappNumber',
        'contactEmail',
        'contactAddress',
        'contactAdditionaDetails',
        'contactIsActive'
    ];

    public $timestamps = false;
}
