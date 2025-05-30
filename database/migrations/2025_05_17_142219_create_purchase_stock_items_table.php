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
        Schema::create('purchase_stock_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_stock_id')->constrained()->onDelete('cascade');
            $table->foreignId('item_id')->constrained()->onDelete('cascade');
            $table->date('MG_date')->nullable();
            $table->date('EXp_date')->nullable();
            $table->string('batch')->nullable();
            $table->integer('qty');
            $table->decimal('cost', 15, 2);
            $table->decimal('dis_count', 15, 2)->default(0);
            $table->decimal('total_cost', 15, 2);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_stock_items');
    }
};
