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
        if (!Schema::hasTable('tblContacts')) {
            Schema::create('tblContacts', function (Blueprint $table) {
                $table->id('contactId');
                $table->string('contactFirstName', 64);
                $table->string('contactLastName', 64);
                $table->char('contactPhoneNumber', 10);
                $table->char('contactWhatsappNumber', 10)->nullable();
                $table->string('contactEmail', 255)->nullable();
                $table->json('contactAddress');
                $table->string('contactAdditionaDetails', 255)->nullable();
                $table->char('contactIsActive', 1)->default('1');
            });
        }
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblContacts');
    }
};
