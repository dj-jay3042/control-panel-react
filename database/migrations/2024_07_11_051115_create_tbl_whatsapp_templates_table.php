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
        Schema::create('tblWhatsappTemplates', function (Blueprint $table) {
            $table->id('templateId');
            $table->string('templateName', 64);
            $table->unsignedBigInteger('templateWhatsappClientId');
            $table->string('templateWhatsappClientIdentifier', 128);
            $table->text('templateMessage');
            $table->integer('templateVariableCount')->default(0);
            $table->char('templateIsActive', 1)->default('1');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblWhatsappTemplates');
    }
};
