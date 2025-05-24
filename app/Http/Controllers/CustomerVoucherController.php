<?php

namespace App\Http\Controllers;

use App\Models\CustomerVoucher;
use App\Models\CustomerVoucherItem;
use Illuminate\Http\Request;

class CustomerVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CustomerVoucher::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $voucher = CustomerVoucher::create($request->only(['shop_id', 'currency_id', 'date', 'total']));

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
        return CustomerVoucher::with('items')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $voucher = CustomerVoucher::findOrFail($id);
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
        $voucher = CustomerVoucher::findOrFail($id);
        $voucher->items()->delete();
        $voucher->delete();
        return response()->json(null, 204);
    }
}
