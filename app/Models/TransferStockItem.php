<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferStockItem extends Model
{
    use HasFactory;

    protected $fillable = ['transfer_stock_id', 'item_id', 'qty', 'cost'];

    public function transferStock() { return $this->belongsTo(TransferStock::class); }
    public function item() { return $this->belongsTo(Item::class); }
}

