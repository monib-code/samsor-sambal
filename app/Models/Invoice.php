<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id', 'shop_id', 'date', 'total_blance', 'receive_in_invoice'
    ];

    public function customer() { return $this->belongsTo(Customer::class); }
    public function shop() { return $this->belongsTo(Shop::class); }
}
