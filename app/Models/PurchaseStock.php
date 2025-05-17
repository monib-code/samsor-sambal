<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseStock extends Model
{
    use HasFactory;

    protected $fillable = ['shop_id', 'company_id', 'currency_id', 'date', 'total_blance'];

    public function shop() { return $this->belongsTo(Shop::class); }
    public function company() { return $this->belongsTo(Company::class); }
    public function currency() { return $this->belongsTo(Currency::class); }
}
