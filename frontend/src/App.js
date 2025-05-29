// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerList from "./pages/customers/CustomerList";
import AddCustomer from "./pages/customers/AddCustomer";
import CustomerDetails from "./pages/customers/CustomerDetails";
import Layout from "./components/Layout";
import CompanyList from "./pages/companies/CompanyList";
import AddCompany from "./pages/companies/AddCompany";
import ItemList from "./pages/items/ItemList";
import AddItem from "./pages/items/AddItem";
import InvoiceList from "./pages/invoices/InvoiceList";
import AddInvoice from "./pages/invoices/AddInvoice";
import InvoiceDetails from "./pages/invoices/InvoiceDetails";
import PurchaseStock from "./pages/purchases/PurchaseStock";
import StockList from "./pages/stocks/StockList";
import TransferStock from "./pages/transfers/TransferStock";
import ExpensesList from "./pages/expenses/ExpensesList";
import LoanCustomerList from "./pages/loans/LoanCustomerList";
import LoanVoucher from "./pages/loans/LoanVoucher";
import CustomerVoucher from "./pages/vouchers/CustomerVoucher";
import CompanyVoucher from "./pages/vouchers/CompanyVoucher";
import Currencies from "./pages/Currencies";





















const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/add" element={<AddCompany />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/add" element={<AddItem />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoices/add" element={<AddInvoice />} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
        <Route path="/purchase-stock" element={<PurchaseStock />} />
        <Route path="/stocks" element={<StockList />} />
        <Route path="/transfer-stock" element={<TransferStock />} />
        <Route path="/expenses" element={<ExpensesList />} />
        <Route path="/loans/customers" element={<LoanCustomerList />} />
        <Route path="/loans/voucher" element={<LoanVoucher />} />
        <Route path="/vouchers/customer" element={<CustomerVoucher />} />
        <Route path="/vouchers/company" element={<CompanyVoucher />} />
        <Route path="/currencies" element={<Currencies />} />

      </Route>
    </Routes>
  );
};

export default App;
