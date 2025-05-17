<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanVoucherItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'loan_voucher_id', 'loan_customer_id', 'details',
        'payment', 'receive', 'total'
    ];

    public function loanVoucher() { return $this->belongsTo(LoanVoucher::class); }
    public function loanCustomer() { return $this->belongsTo(LoanCustomer::class); }
}

