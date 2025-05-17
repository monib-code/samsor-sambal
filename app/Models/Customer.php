<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id', 'name', 'contact_number', 'location', 'address',
        'pkr_blance', 'afn_blance', 'usd_blance', 'tom_blance'
    ];

    public function shop() { return $this->belongsTo(Shop::class); }
}

