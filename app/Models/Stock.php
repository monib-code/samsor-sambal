<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = ['shop_id', 'item_id', 'qty', 'cost'];

    public function shop() { return $this->belongsTo(Shop::class); }
    public function item() { return $this->belongsTo(Item::class); }
}

