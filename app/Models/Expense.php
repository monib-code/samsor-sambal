<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = ['currency_id', 'shop_id', 'date', 'total_blance'];

    public function shop() { return $this->belongsTo(Shop::class); }
    public function currency() { return $this->belongsTo(Currency::class); }
}

