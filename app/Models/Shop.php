<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'contact_number', 'address'];

    public function customers() { return $this->hasMany(Customer::class); }
    public function companies() { return $this->hasMany(Company::class); }
}
