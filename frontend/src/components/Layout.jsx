// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";
import { Users, Home, PlusCircle } from "lucide-react";

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
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
