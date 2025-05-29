import { Package } from "lucide-react";

const ItemList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <Package size={20} /> لیست آیتم‌ها
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">آیتم ۱</li>
        <li className="p-3 bg-gray-100 rounded">آیتم ۲</li>
      </ul>
    </div>
  );
};

export default ItemList;
