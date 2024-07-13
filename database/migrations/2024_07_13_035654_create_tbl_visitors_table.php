<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTblVisitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblVisitors', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('ip', 28);
            $table->string('browser', 128);
            $table->string('os', 128);
            $table->string('device', 128);
            $table->dateTime('visitedDate')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tblVisitors');
    }
}
