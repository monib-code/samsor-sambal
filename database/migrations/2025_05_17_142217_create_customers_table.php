<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('contact_number')->nullable();
            $table->string('location')->nullable();
            $table->text('address')->nullable();
            $table->decimal('pkr_blance', 15, 2)->default(0);
            $table->decimal('afn_blance', 15, 2)->default(0);
            $table->decimal('usd_blance', 15, 2)->default(0);
            $table->decimal('tom_blance', 15, 2)->default(0);
            $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
