import { Boxes } from "lucide-react";

const StockList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <Boxes size={20} /> لیست موجودی‌ها (Stock List)
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">
          آیتم: روغن | تعداد: 50 | موجودی: 2500 AFN
        </li>
        <li className="p-3 bg-gray-100 rounded">
          آیتم: آرد | تعداد: 100 | موجودی: 5000 AFN
        </li>
      </ul>
    </div>
  );
};

export default StockList;
