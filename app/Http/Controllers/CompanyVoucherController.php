<?php

namespace App\Http\Controllers;

use App\Models\CompanyVoucher;
use App\Models\CompanyVoucherItem;
use Illuminate\Http\Request;

class CompanyVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return CompanyVoucher::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $voucher = CompanyVoucher::create($request->only(['shop_id', 'currency_id', 'date', 'total']));

        foreach ($request->items as $item) {
            $voucher->items()->create($item);
        }

        return response()->json($voucher->load('items'), 201);
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return CompanyVoucher::with('items')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $voucher = CompanyVoucher::findOrFail($id);
        $voucher->update($request->only(['shop_id', 'currency_id', 'date', 'total']));

        $voucher->items()->delete();
        foreach ($request->items as $item) {
            $voucher->items()->create($item);
        }

        return response()->json($voucher->load('items'));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $voucher = CompanyVoucher::findOrFail($id);
        $voucher->items()->delete();
        $voucher->delete();
        return response()->json(null, 204);
    }

}
