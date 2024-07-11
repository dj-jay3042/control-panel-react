<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    protected $table = 'tblMails';

    protected $fillable = [
        'mailFrom',
        'mailTo',
        'mailCc',
        'mailBcc',
        'mailBody',
        'mailType',
        'mailHasAttachments',
        'mailParentId'
    ];

    public $timestamps = false;
}
