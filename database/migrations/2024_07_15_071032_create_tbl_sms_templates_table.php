<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblSmsTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('tblSmsTemplates')) {
            Schema::create('tblSmsTemplates', function (Blueprint $table) {
                $table->id('templateId');
                $table->string('templateName', 64);
                $table->string('templateSubject', 128);
                $table->text('templateBody');
                $table->char('templateIsActive', 1)->default('1');
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
        Schema::dropIfExists('tblSmsTemplates');
    }
}
