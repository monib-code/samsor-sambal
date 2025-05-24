<?php

namespace App\Http\Controllers;

use App\Models\LoanCustomer;
use Illuminate\Http\Request;

class LoanCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return LoanCustomer::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $loanCustomer = LoanCustomer::create($request->all());
         return response()->json($loanCustomer, 201); 
    }

    /**
     * Display the specified resource.
     */
    public function show(LoanCustomer $loanCustomer) {
        return $loanCustomer;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LoanCustomer $loanCustomer) {
        $loanCustomer->update($request->all());
        return response()->json($loanCustomer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LoanCustomer $loanCustomer) {
        $loanCustomer->delete();
        return response()->json(null, 204);
    }
}
