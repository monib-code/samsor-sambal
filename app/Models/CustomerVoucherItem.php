<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerVoucherItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_voucher_id', 'customer_id', 'details',
        'payment', 'receive', 'total'
    ];

    public function customerVoucher() { return $this->belongsTo(CustomerVoucher::class); }
    public function customer() { return $this->belongsTo(Customer::class); }
}

