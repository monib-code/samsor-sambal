<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\ExpenseItem;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Expense::with('items')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $expense = Expense::create($request->only(['shop_id', 'currency_id', 'date', 'total_blance']));

        foreach ($request->items as $item) {
            $expense->items()->create($item);
        }

        return response()->json($expense->load('items'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Expense::with('items')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
   public function update(Request $request, $id)
    {
        $expense = Expense::findOrFail($id);
        $expense->update($request->only(['shop_id', 'currency_id', 'date', 'total_blance']));

        $expense->items()->delete();
        foreach ($request->items as $item) {
            $expense->items()->create($item);
        }

        return response()->json($expense->load('items'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $expense = Expense::findOrFail($id);
        $expense->items()->delete();
        $expense->delete();
        return response()->json(null, 204);
    }
}
