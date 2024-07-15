<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmsTemplate extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tblSmsTemplates';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'templateId';

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
        'templateName', 'templateSubject', 'templateBody', 'templateIsActive'
    ];
}
