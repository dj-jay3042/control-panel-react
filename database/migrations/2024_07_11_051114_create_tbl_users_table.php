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
        if (!Schema::hasTable('tblUsers')) {
            Schema::create('tblUsers', function (Blueprint $table) {
                $table->id('userId');
                $table->string('userFirstName', 64);
                $table->string('userLastName', 64);
                $table->string('userEmail', 255);
                $table->char('userPhoneNumber', 10);
                $table->char('userWhatsappNumber', 10);
                $table->json('userAddress');
                $table->char('userIsEmailVerified', 1)->default('0');
                $table->char('userIsPhoneVerified', 1)->default('0');
                $table->char('userIsWhatsappVerified', 1)->default('0');
                $table->string('userLogin', 16)->unique();
                $table->char('userPassword', 60);
                $table->char('userLoginOtp', 6)->nullable();
                $table->char('userAccessToken', 128)->nullable();
                $table->char('userRefreshToken', 128)->nullable();
                $table->unsignedBigInteger('userRoleId')->nullable();
                $table->char('userIsActive', 1)->default('1');
                $table->timestamps();
                $table->foreign('userRoleId')->references('roleId')->on('tblUserRoles');
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblUsers');
    }
};
