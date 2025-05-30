import { Package } from "lucide-react";

const ItemList = () => {
  const items = [
    { id: 1, name: "روغن", code: "A123", price: 150 },
    { id: 2, name: "برنج", code: "B456", price: 200 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Package size={20} /> لیست آیتم‌ها
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {item.name} - کد: {item.code} - قیمت: {item.price} افغانی
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
