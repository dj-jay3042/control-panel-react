<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('tblRoutes', function (Blueprint $table) {
            $table->id('routeId');
            $table->string('routeName', 64);
            $table->string('routeComponentName', 64);
            $table->string('routeComponentLocation', 128);
            $table->string('routeUrl', 32);
            $table->char('routeTarget', 1)->default('0');
            $table->char('routeIsPrivate', 1)->default('0');
            $table->char('routeIsActive', 1)->default('1');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblRoutes');
    }
};
