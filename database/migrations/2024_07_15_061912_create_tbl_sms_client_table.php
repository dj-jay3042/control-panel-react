<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSmsClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('tblSmsClient')) {
            Schema::create('tblSmsClient', function (Blueprint $table) {
                $table->id('clientId');
                $table->string('clientName', 64);
                $table->string('clientApiKey', 128);
                $table->string('clientSenderMobileNumber', 10);
                $table->string('clientApiBaseUrl', 255);
                $table->char('clientIsActive', 1)->default('1');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblSmsClient');
    }
}
