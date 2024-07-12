<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblMenuItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblMenuItems', function (Blueprint $table) {
            $table->id('menuId');
            $table->string('menuTitle', 64);
            $table->text('menuSvg')->nullable();
            $table->char('menuType', 1)->default('1');
            $table->unsignedBigInteger('menuRouteId');
            $table->unsignedBigInteger('menuParentId')->nullable();
            $table->char('menuIsActive', 1)->default('1');

            $table->foreign('menuRouteId')->references('routeId')->on('tblRoutes');
            $table->foreign('menuParentId')->references('menuId')->on('tblMenuItems');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblMenuItems');
    }
}
