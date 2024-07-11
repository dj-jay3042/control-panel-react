<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'tblUsers';

    protected $fillable = [
        'userFirstName',
        'userLastName',
        'userEmail',
        'userPhoneNumber',
        'userWhatsappNumber',
        'userAddress',
        'userIsEmailVerified',
        'userIsPhoneVerified',
        'userIsWhatsappVerified',
        'userLogin',
        'userPassword',
        'userLoginOtp',
        'userAccessToken',
        'userRefreshToken',
        'userRoleId',
        'userIsActive'
    ];

    public $timestamps = false;

    public function role()
    {
        return $this->belongsTo(UserRole::class, 'userRoleId', 'roleId');
    }
}
