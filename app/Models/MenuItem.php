<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    // Table Name
    protected $table = 'tblMenuItems';

    // Primary Key
    protected $primaryKey = 'menuId';

    // Disable timestamps
    public $timestamps = false;

    // Fillable fields
    protected $fillable = [
        'menuTitle',
        'menuSvg',
        'menuType',
        'menuRouteId',
        'menuParentId',
        'menuIsActive',
    ];

    // Relationships
    public function route()
    {
        return $this->belongsTo(Route::class, 'menuRouteId', 'routeId');
    }

    public function parent()
    {
        return $this->belongsTo(MenuItem::class, 'menuParentId');
    }

    public function children()
    {
        return $this->hasMany(MenuItem::class, 'menuParentId');
    }
}
