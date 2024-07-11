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
        Schema::create('tblEmailsDetails', function (Blueprint $table) {
            $table->id('emailId');
            $table->string('emailAddress', 255);
            $table->char('emailIsActive', 1)->default('1');
            $table->unsignedBigInteger('contactId')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblEmailsDetails');
    }
};
