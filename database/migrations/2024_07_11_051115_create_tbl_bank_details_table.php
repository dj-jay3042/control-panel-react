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
        if (!Schema::hasTable('tblBankDetails')) {
            Schema::create('tblBankDetails', function (Blueprint $table) {
                $table->id('bankId');
                $table->string('bankName', 128);
                $table->char('bankAccountNumber', 18);
                $table->json('bankAddress');
                $table->char('bankIfscCode', 11);
                $table->decimal('bankAccountMinimumAmount', 10, 2);
                $table->decimal('bankAccountBalance', 13, 2)->nullable();
                $table->unsignedBigInteger('bankContactId');
                $table->char('bankAccountIsActive', 1)->default('1');
                $table->timestamps();
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblBankDetails');
    }
};
