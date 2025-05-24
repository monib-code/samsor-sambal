<?php

namespace App\Http\Controllers;

use App\Models\PurchaseStock;
use App\Models\PurchaseStockItem;
use Illuminate\Http\Request;

class PurchaseStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return PurchaseStock::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $purchase = PurchaseStock::create($request->only(['shop_id', 'company_id', 'currency_id', 'date', 'total_blance']));

            foreach ($request->items as $item) {
                $purchase->items()->create($item);
        }
        return response()->json($purchase->load('items'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
        {
            return PurchaseStock::with('items')->findOrFail($id);
        }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $purchase = PurchaseStock::findOrFail($id);
        $purchase->update($request->only(['shop_id', 'company_id', 'currency_id', 'date', 'total_blance']));

        $purchase->items()->delete();
        foreach ($request->items as $item) {
            $purchase->items()->create($item);
        }

        return response()->json($purchase->load('items'));
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
    {
        $purchase = PurchaseStock::findOrFail($id);
        $purchase->items()->delete();
        $purchase->delete();
        return response()->json(null, 204);
    }
}
