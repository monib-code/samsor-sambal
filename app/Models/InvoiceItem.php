<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_id', 'item_id', 'qty', 'cost', 'dis_count', 'total'
    ];

    public function invoice() { return $this->belongsTo(Invoice::class); }
    public function item() { return $this->belongsTo(Item::class); }
}
