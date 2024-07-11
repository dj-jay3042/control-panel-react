<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailAttachment extends Model
{
    use HasFactory;

    protected $table = 'tblMailAttachments';

    protected $fillable = [
        'attachmentMailId',
        'attachmentFileName',
        'attachmentFilePath',
        'attachmentSize',
        'attachmentSizeUnit',
        'attachmentIsDeleted'
    ];

    public $timestamps = false;

    public function mail()
    {
        return $this->belongsTo(Mail::class, 'attachmentMailId', 'mailId');
    }
}
