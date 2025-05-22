<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;

class ShopController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Shop::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $shop = Shop::create($request->all());
         return response()->json($shop, 201);
    }

    /**
     * Display the specified resource.
     */
   public function show(Shop $shop) {
            return $shop;
        }


    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, Shop $shop) {
            $shop->update($request->all());
            return response()->json($shop);
        }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop) {
            $shop->delete();
            return response()->json(null, 204);
        }

}
