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
        Schema::create('tblUserRoles', function (Blueprint $table) {
            $table->id('roleId');
            $table->string('roleName', 32);
            $table->string('roleDescription', 128);
            $table->json('roleAccessDetails');
            $table->char('roleIsActive', 1)->default('1');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblUserRoles');
    }
};
