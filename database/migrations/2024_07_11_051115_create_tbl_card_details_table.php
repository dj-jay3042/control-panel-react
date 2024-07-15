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
        if (!Schema::hasTable('tblCardDetails')) {
            Schema::create('tblCardDetails', function (Blueprint $table) {
                $table->id('cardId');
                $table->char('cardNumber', 16);
                $table->string('cardExpiryDate', 5);
                $table->char('cardCvv', 3);
                $table->char('cardPassword', 6);
                $table->string('cardHolderName', 64);
                $table->unsignedBigInteger('cardContactId');
                $table->char('cardIsActive', 1)->default('1');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblCardDetails');
    }
};
