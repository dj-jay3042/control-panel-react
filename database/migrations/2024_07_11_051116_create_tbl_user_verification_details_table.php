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
        if (!Schema::hasTable('tblUserVerificationDetails')) {
            Schema::create('tblUserVerificationDetails', function (Blueprint $table) {
                $table->id('verificationId');
                $table->unsignedBigInteger('verificationUserId');
                $table->char('verificationType', 1);
                $table->string('verificationKeyType', 1);
                $table->string('verificationValue', 128);
                $table->char('verificationStatus', 1)->default('0');
                $table->foreign('verificationUserId')->references('userId')->on('tblUsers');
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblUserVerificationDetails');
    }
};
