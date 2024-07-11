<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
    use HasFactory;

    protected $table = 'tblUserRoles';

    protected $fillable = [
        'roleName',
        'roleDescription',
        'roleAccessDetails',
        'roleIsActive'
    ];

    public $timestamps = false;
}
