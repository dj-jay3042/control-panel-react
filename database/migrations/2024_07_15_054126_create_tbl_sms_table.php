<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTblSmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('tblSms')) {
            Schema::create('tblSms', function (Blueprint $table) {
                $table->id('smsId');
                $table->string('smsMessageId', 128);
                $table->string('smsFrom', 128);
                $table->string('smsTo', 128);
                $table->text('smsBody');
                $table->char('smsType', 1)->default('0');
                $table->char('smsStatus', 1)->default('0');
                $table->dateTime('smsTime')->default(DB::raw('CURRENT_TIMESTAMP'));

                // No timestamps for created_at and updated_at
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
        Schema::dropIfExists('tblSms');
    }
}
