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
        Schema::create('tblTransections', function (Blueprint $table) {
            $table->id('transactionId');
            $table->unsignedBigInteger('transactionUserId');
            $table->unsignedBigInteger('transectionPaymentMeyhodId');
            $table->string('transectionTitle', 128);
            $table->decimal('transectionAmount', 13, 2);
            $table->char('transectionType', 1)->default('0');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblTransections');
    }
};
