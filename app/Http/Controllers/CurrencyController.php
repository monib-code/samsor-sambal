<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          return Currency::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $currency = Currency::create($request->all());
            return response()->json($currency, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Currency $currency) {
            return $currency;
        }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Currency $currency) {
            $currency->update($request->all());
            return response()->json($currency);
        }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Currency $currency) {
            $currency->delete();
            return response()->json(null, 204);
        }
}
