<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmsClient extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tblSmsClient';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'clientId';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'clientName', 'clientApiKey', 'clientSenderMobileNumber', 'clientApiBaseUrl', 'clientIsActive'
    ];
}
