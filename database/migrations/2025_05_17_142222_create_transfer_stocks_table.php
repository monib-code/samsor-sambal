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
       Schema::create('transfer_stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_shop_id')->constrained('shops')->onDelete('cascade');
            $table->foreignId('to_shop_id')->constrained('shops')->onDelete('cascade');
            $table->date('date');
            $table->decimal('total', 15, 2);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transfer_stocks');
    }
};
