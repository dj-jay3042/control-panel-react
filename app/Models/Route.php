<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    protected $table = 'tblRoutes';

    protected $fillable = [
        'routeName',
        'routeComponentName',
        'routeComponentLocation',
        'routeUrl',
        'routeTarget',
        'routeIsPrivate',
        'routeIsActive'
    ];

    public $timestamps = false;
}
