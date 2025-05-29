// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";
import { Users, Home, PlusCircle, Building, Building2 } from "lucide-react";
import { Package, PackagePlus } from "lucide-react";
import { FileText, FilePlus } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Boxes } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Wallet } from "lucide-react";
import { HandCoins } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { WalletCards } from "lucide-react";
import { Landmark } from "lucide-react";
import { DollarSign } from "lucide-react";













const Layout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 bg-teal-600 text-white p-4 space-y-6">
        <h1 className="text-xl font-bold">📊 حسابداری</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/dashboard" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
            <Home size={18} /> داشبورد
          </Link>
          <Link to="/customers" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
            <Users size={18} /> لیست مشتری‌ها
          </Link>
          <Link to="/customers/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
            <PlusCircle size={18} /> افزودن مشتری
          </Link>
          <Link to="/companies" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
          <Building size={18} /> لیست شرکت‌ها
          </Link>
          <Link to="/companies/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
          <Building2 size={18} /> افزودن شرکت
          </Link>
          <Link to="/items" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
          <Package size={18} /> لیست آیتم‌ها
          </Link>
          <Link to="/items/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
          <PackagePlus size={18} /> افزودن آیتم
          </Link>
          <Link to="/invoices" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
          <FileText size={18} /> لیست فاکتورها
          </Link>
          <Link to="/invoices/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
           <FilePlus size={18} /> افزودن فاکتور
          </Link>
          <Link to="/purchase-stock" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
         <ShoppingCart size={18} /> خرید اجناس (Purchase)
        </Link>
        <Link to="/stocks" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
       <Boxes size={18} /> لیست موجودی‌ها
        </Link>
        <Link to="/transfer-stock" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <MoveRight size={18} /> انتقال موجودی
        </Link>
        <Link to="/expenses" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <Wallet size={18} /> لیست مصارف
        </Link>
        <Link to="/loans/customers" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <HandCoins size={18} /> مشتریان قرض‌دار
        </Link>
        <Link to="/loans/voucher" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
       <ReceiptText size={18} /> واچر قرض
        </Link>
        <Link to="/vouchers/customer" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <WalletCards size={18} /> واچر مشتری
          </Link>
          <Link to="/vouchers/company" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <Landmark size={18} /> واچر شرکت
        </Link>
        <Link to="/currencies" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2">
        <DollarSign size={18} /> ارزها
        </Link>











        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
