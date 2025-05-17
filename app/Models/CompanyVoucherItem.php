<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyVoucherItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_voucher_id', 'company_id', 'details',
        'payment', 'receive', 'total'
    ];

    public function companyVoucher() { return $this->belongsTo(CompanyVoucher::class); }
    public function company() { return $this->belongsTo(Company::class); }
}

