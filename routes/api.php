<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ShopController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\LoanCustomerController;
use App\Http\Controllers\PurchaseStockController;
use App\Http\Controllers\PurchaseStockItemController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\InvoiceItemController;
use App\Http\Controllers\TransferStockController;
use App\Http\Controllers\TransferStockItemController;
use App\Http\Controllers\LoanVoucherController;
use App\Http\Controllers\LoanVoucherItemController;
use App\Http\Controllers\CustomerVoucherController;
use App\Http\Controllers\CustomerVoucherItemController;
use App\Http\Controllers\CompanyVoucherController;
use App\Http\Controllers\CompanyVoucherItemController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\ExpensesItemController;




Route::apiResource('shops', ShopController::class);
Route::apiResource('customers', CustomerController::class);
Route::apiResource('companies', CompanyController::class);
Route::apiResource('currencies', CurrencyController::class);
Route::apiResource('items', ItemController::class);
Route::apiResource('stocks', StockController::class);
Route::apiResource('loan-customers', LoanCustomerController::class);

Route::apiResource('purchase-stocks', PurchaseStockController::class);
Route::apiResource('purchase-stocks.items', PurchaseStockItemController::class)->shallow();

Route::apiResource('invoices', InvoiceController::class);
Route::apiResource('invoices.items', InvoiceItemController::class)->shallow();

Route::apiResource('transfer-stocks', TransferStockController::class);
Route::apiResource('transfer-stocks.items', TransferStockItemController::class)->shallow();

Route::apiResource('loan-vouchers', LoanVoucherController::class);
Route::apiResource('loan-vouchers.items', LoanVoucherItemController::class)->shallow();

Route::apiResource('customer-vouchers', CustomerVoucherController::class);
Route::apiResource('customer-vouchers.items', CustomerVoucherItemController::class)->shallow();

Route::apiResource('company-vouchers', CompanyVoucherController::class);
Route::apiResource('company-vouchers.items', CompanyVoucherItemController::class)->shallow();

Route::apiResource('expenses', ExpenseController::class);
Route::apiResource('expenses.items', ExpensesItemController::class)->shallow();
