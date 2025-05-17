<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanVoucher extends Model
{
    use HasFactory;

    protected $fillable = ['shop_id', 'currency_id', 'date', 'total'];

    public function shop() { return $this->belongsTo(Shop::class); }
    public function currency() { return $this->belongsTo(Currency::class); }
}

