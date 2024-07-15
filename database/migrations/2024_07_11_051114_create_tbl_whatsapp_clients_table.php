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
        if (!Schema::hasTable('tblWhatsappClients')) {
            Schema::create('tblWhatsappClients', function (Blueprint $table) {
                $table->id('clientId');
                $table->string('clientName', 64);
                $table->char('clientWhatsppNumber', 10);
                $table->string('clientAccountId', 64)->nullable();
                $table->string('clientBaseUrl', 128);
                $table->string('clientApiKey', 300)->nullable();
                $table->char('clientTestMode', 1)->default('0');
                $table->char('clientIsActive', 1)->default('1');
                $table->char('clientIsDeleted', 1)->default('0');
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblWhatsappClients');
    }
};
