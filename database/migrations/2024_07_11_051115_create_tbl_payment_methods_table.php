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
        Schema::create('tblPaymentMethods', function (Blueprint $table) {
            $table->id('paymentMethodId');
            $table->string('paymentMethodName', 32);
            $table->char('paymentMethodType', 1)->default('0');
            $table->decimal('paymentMethodCharge', 10, 2)->default(0.00);
            $table->unsignedBigInteger('paymentMethodBankId');
            $table->char('paymentMethodIsActive', 1)->default('1');
            $table->timestamps();
            $table->foreign('paymentMethodBankId')->references('bankId')->on('tblBankDetails');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblPaymentMethods');
    }
};
