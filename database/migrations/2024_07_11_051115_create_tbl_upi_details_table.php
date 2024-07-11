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
        Schema::create('tblUpiDetails', function (Blueprint $table) {
            $table->id('upiId');
            $table->string('upiName', 64);
            $table->string('upiAppName', 128);
            $table->string('upiUpiId', 20);
            $table->char('upiPassword', 6);
            $table->unsignedBigInteger('upiContactId');
            $table->char('upiIsActive', 1)->default('1');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblUpiDetails');
    }
};
