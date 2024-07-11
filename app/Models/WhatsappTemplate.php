<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsappTemplate extends Model
{
    use HasFactory;

    protected $table = 'tblWhatsappTemplates';

    protected $fillable = [
        'templateName',
        'templateWhatsappClientId',
        'templateWhatsappClientIdentifier',
        'templateMessage',
        'templateVariableCount',
        'templateIsActive'
    ];

    public $timestamps = false;

    public function whatsappClient()
    {
        return $this->belongsTo(WhatsappClient::class, 'templateWhatsappClientId', 'clientId');
    }
}
