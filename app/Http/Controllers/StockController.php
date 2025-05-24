<?php

namespace App\Http\Controllers;

use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Stock::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $stock = Stock::create($request->all());
            return response()->json($stock, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock $stock) {
            return $stock;
         }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, Stock $stock) {
        $stock->update($request->all());
        return response()->json($stock);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock $stock) {
        $stock->delete();
        return response()->json(null, 204);
    }
}
