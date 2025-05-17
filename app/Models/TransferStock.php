<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferStock extends Model
{
    use HasFactory;

    protected $fillable = ['from_shop_id', 'to_shop_id', 'date', 'total'];

    public function fromShop() { return $this->belongsTo(Shop::class, 'from_shop_id'); }
    public function toShop() { return $this->belongsTo(Shop::class, 'to_shop_id'); }
}

