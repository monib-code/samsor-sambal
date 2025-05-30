import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Users, Home, PlusCircle, Building, Building2, Package, PackagePlus,
  FileText, FilePlus, ShoppingCart, Boxes, MoveRight, Wallet, HandCoins,
  ReceiptText, WalletCards, Landmark, DollarSign, Settings as SettingsIcon,
} from "lucide-react";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <aside className="w-64 bg-teal-600 text-white p-4 space-y-6">
        <h1 className="text-xl font-bold">📊 سیستم حسابداری سمسور سمبال</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/dashboard" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Home size={18} /> داشبورد</Link>
          <Link to="/customers" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Users size={18} /> لیست مشتری‌ها</Link>
          <Link to="/customers/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><PlusCircle size={18} /> افزودن مشتری</Link>
          <Link to="/companies" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Building size={18} /> لیست شرکت‌ها</Link>
          <Link to="/companies/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Building2 size={18} /> افزودن شرکت</Link>
          <Link to="/items" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Package size={18} /> لیست آیتم‌ها</Link>
          <Link to="/items/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><PackagePlus size={18} /> افزودن آیتم</Link>
          <Link to="/invoices" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><FileText size={18} /> لیست فاکتورها</Link>
          <Link to="/invoices/add" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><FilePlus size={18} /> افزودن فاکتور</Link>
          <Link to="/purchase-stock" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><ShoppingCart size={18} /> خرید اجناس</Link>
          <Link to="/stocks" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Boxes size={18} /> لیست موجودی‌ها</Link>
          <Link to="/transfer-stock" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><MoveRight size={18} /> انتقال موجودی</Link>
          <Link to="/expenses" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Wallet size={18} /> لیست مصارف</Link>
          <Link to="/loans/customers" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><HandCoins size={18} /> مشتریان قرض‌دار</Link>
          <Link to="/loans/voucher" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><ReceiptText size={18} /> واچر قرض</Link>
          <Link to="/vouchers/customer" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><WalletCards size={18} /> واچر مشتری</Link>
          <Link to="/vouchers/company" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><Landmark size={18} /> واچر شرکت</Link>
          <Link to="/currencies" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><DollarSign size={18} /> ارزها</Link>
          <Link to="/settings" className="hover:bg-teal-700 p-2 rounded flex items-center gap-2"><SettingsIcon size={18} /> تنظیمات</Link>
        </nav>

       
      </aside>

      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
