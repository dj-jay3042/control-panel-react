<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsappClient extends Model
{
    use HasFactory;

    protected $table = 'tblWhatsappClients';

    protected $fillable = [
        'clientName',
        'clientWhatsppNumber',
        'clientAccountId',
        'clientBaseUrl',
        'clientApiKey',
        'clientTestMode',
        'clientIsActive',
        'clientIsDeleted'
    ];

    public $timestamps = false;
}
