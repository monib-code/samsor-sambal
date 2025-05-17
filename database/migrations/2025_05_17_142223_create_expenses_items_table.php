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
       Schema::create('expenses_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('expenses_id')->constrained()->onDelete('cascade');
            $table->text('details')->nullable();
            $table->decimal('cost', 15, 2);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('expenses_items');
    }
};
