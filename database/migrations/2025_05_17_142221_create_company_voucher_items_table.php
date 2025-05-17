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
        Schema::create('company_voucher_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_voucher_id')->constrained()->onDelete('cascade');
            $table->foreignId('company_id')->constrained()->onDelete('cascade');
            $table->text('details')->nullable();
            $table->decimal('payment', 15, 2)->default(0);
            $table->decimal('receive', 15, 2)->default(0);
            $table->decimal('total', 15, 2);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_voucher_items');
    }
};
