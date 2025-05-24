<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Invoice::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $invoice = Invoice::create($request->only(['customer_id', 'shop_id', 'date', 'total_blance', 'receive_in_invoice']));

        foreach ($request->items as $item) {
            $invoice->items()->create($item);
        }

        return response()->json($invoice->load('items'), 201);
    }

    /**
     * Display the specified resource.
     */
   public function show($id)
    {
        return Invoice::with('items')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->update($request->only(['customer_id', 'shop_id', 'date', 'total_blance', 'receive_in_invoice']));

        $invoice->items()->delete();
        foreach ($request->items as $item) {
            $invoice->items()->create($item);
        }

        return response()->json($invoice->load('items'));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->items()->delete();
        $invoice->delete();
        return response()->json(null, 204);
    }
}
