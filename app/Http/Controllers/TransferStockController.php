<?php

namespace App\Http\Controllers;

use App\Models\TransferStock;
use App\Mosels\TransferStockItem;
use Illuminate\Http\Request;

class TransferStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return TransferStock::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $transfer = TransferStock::create($request->only(['from_shop_id', 'to_shop_id', 'date', 'total']));

        foreach ($request->items as $item) {
            $transfer->items()->create($item);
        }

        return response()->json($transfer->load('items'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return TransferStock::with('items')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $transfer = TransferStock::findOrFail($id);
        $transfer->update($request->only(['from_shop_id', 'to_shop_id', 'date', 'total']));

        $transfer->items()->delete();
        foreach ($request->items as $item) {
            $transfer->items()->create($item);
        }

        return response()->json($transfer->load('items'));
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id)
    {
        $transfer = TransferStock::findOrFail($id);
        $transfer->items()->delete();
        $transfer->delete();
        return response()->json(null, 204);
    }
}
