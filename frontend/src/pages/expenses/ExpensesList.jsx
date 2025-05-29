import { Wallet } from "lucide-react";

const ExpensesList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <Wallet size={20} /> لیست مصارف (Expenses)
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">
          تاریخ: ۱۴۰۳/۰۳/۱۰ | نوع: کرایه موتر | مبلغ: ۵۰۰ AFN
        </li>
        <li className="p-3 bg-gray-100 rounded">
          تاریخ: ۱۴۰۳/۰۳/۰۹ | نوع: خرید کاغذ | مبلغ: ۲۰۰ AFN
        </li>
      </ul>
    </div>
  );
};

export default ExpensesList;
