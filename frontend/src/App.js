// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerList from "./pages/customers/CustomerList";
import AddCustomer from "./pages/customers/AddCustomer";
import CustomerDetails from "./pages/customers/CustomerDetails";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
