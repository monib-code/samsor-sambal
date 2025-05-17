<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpensesItem extends Model
{
    use HasFactory;

    protected $fillable = ['expenses_id', 'details', 'cost'];

    public function expense() { return $this->belongsTo(Expense::class, 'expenses_id'); }
}
