<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sms extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tblSms';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'smsId';

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
        'smsMessageId', 'smsFrom', 'smsTo', 'smsBody', 'smsType', 'smsStatus', 'smsTime'
    ];
}
