<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseStockItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_stock_id', 'item_id', 'MG_date', 'EXp_date', 'batch',
        'qty', 'cost', 'dis_count', 'total_cost'
    ];

    public function purchaseStock() { return $this->belongsTo(PurchaseStock::class); }
    public function item() { return $this->belongsTo(Item::class); }
}

