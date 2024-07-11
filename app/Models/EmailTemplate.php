<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{
    use HasFactory;

    protected $table = 'tblEmailTemplates';

    protected $fillable = [
        'templateName',
        'templateSubject',
        'templateBody',
        'templateIsActive'
    ];

    public $timestamps = false;
}
