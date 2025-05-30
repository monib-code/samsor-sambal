import { useState } from "react";
import { Package, Pencil, Trash2, Search, X } from "lucide-react";

const ItemList = () => {
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: "روغن", code: "A001", price: 120 },
    { id: 2, name: "برنج", code: "B002", price: 85 },
    { id: 3, name: "چای", code: "C003", price: 60 },
  ]);

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("آیا مطمئن هستید که این آیتم حذف شود؟")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setItems((prev) =>
      prev.map((i) => (i.id === editItem.id ? editItem : i))
    );
    setEditItem(null);
  };

  return (
    <div className="space-y-4 text-right rtl">
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 flex items-center justify-end gap-2">
        <Package size={24} /> لیست آیتم‌ها
      </h2>

      <div className="flex flex-row-reverse items-center gap-2 max-w-sm">
        <input
          type="text"
          placeholder="جستجو بر اساس نام..."
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="p-2 bg-teal-600 text-white rounded hover:bg-teal-700">
          <Search size={16} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded overflow-hidden text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="py-2 px-4">نام آیتم</th>
              <th className="py-2 px-4">کد</th>
              <th className="py-2 px-4">قیمت</th>
              <th className="py-2 px-4 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.code}</td>
                <td className="py-2 px-4">{item.price} افغانی</td>
                <td className="py-2 px-4 flex justify-center gap-2">
                  <button
                    onClick={() => setEditItem(item)}
                    className="text-blue-600 hover:underline"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-500 dark:text-gray-400">
                  نتیجه‌ای یافت نشد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-md space-y-4 relative">
            <button
              onClick={() => setEditItem(null)}
              className="absolute top-2 left-2 text-gray-600 dark:text-gray-300"
            >
              <X size={18} />
            </button>
            <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400">
              ویرایش آیتم
            </h3>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={editItem.name}
                onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                placeholder="نام آیتم"
              />
              <input
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={editItem.code}
                onChange={(e) => setEditItem({ ...editItem, code: e.target.value })}
                placeholder="کد آیتم"
              />
              <input
                type="number"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={editItem.price}
                onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                placeholder="قیمت"
              />
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
                ذخیره تغییرات
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
