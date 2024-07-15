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
        if (!Schema::hasTable('tblMailAttachments')) {
            Schema::create('tblMailAttachments', function (Blueprint $table) {
                $table->id('attachmentId');
                $table->unsignedBigInteger('attachmentMailId');
                $table->string('attachmentFileName', 255);
                $table->string('attachmentFilePath', 128);
                $table->decimal('attachmentSize', 6, 2);
                $table->char('attachmentSizeUnit', 2)->default('kb');
                $table->char('attachmentIsDeleted', 1)->default('0');
                $table->timestamps();
                $table->foreign('attachmentMailId')->references('mailId')->on('tblMails');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblMailAttachments');
    }
};
