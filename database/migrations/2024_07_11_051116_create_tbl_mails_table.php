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
        Schema::create('tblMails', function (Blueprint $table) {
            $table->id('mailId');
            $table->string('mailFrom', 255);
            $table->string('mailTo', 255);
            $table->string('mailCc', 255)->nullable();
            $table->string('mailBcc', 255)->nullable();
            $table->text('mailBody');
            $table->char('mailType', 1)->default('0');
            $table->integer('mailHasAttachments')->nullable();
            $table->unsignedBigInteger('mailParentId')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblMails');
    }
};
