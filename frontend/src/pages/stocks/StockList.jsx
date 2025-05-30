import { Boxes } from "lucide-react";

const StockList = () => {
  const stockItems = [
    { id: 1, name: "روغن", quantity: 40 },
    { id: 2, name: "برنج", quantity: 20 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Boxes size={20} /> لیست موجودی‌ها
      </h2>
      <ul className="space-y-2">
        {stockItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {item.name} - تعداد: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
