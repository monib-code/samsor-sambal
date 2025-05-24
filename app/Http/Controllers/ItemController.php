<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Item::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $item = Item::create($request->all());
         return response()->json($item, 201);
    }

    /**
     * Display the specified resource.
     */
   public function show(Item $item) {
            return $item;
        }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item) {
            $item->update($request->all());
            return response()->json($item);
        }


    /**
     * Remove the specified resource from storage.
     */
   public function destroy(Item $item) {
            $item->delete();
            return response()->json(null, 204);
        }
}
