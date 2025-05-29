import { HandCoins } from "lucide-react";

const LoanCustomerList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <HandCoins size={20} /> لیست مشتری‌های قرض‌دار
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">
          مشتری: غلام | مبلغ: ۵۰۰۰ AFN | تاریخ: ۱۴۰۳/۰۳/۰۵
        </li>
        <li className="p-3 bg-gray-100 rounded">
          مشتری: سلیمان | مبلغ: ۳۰۰۰ AFN | تاریخ: ۱۴۰۳/۰۲/۲۸
        </li>
      </ul>
    </div>
  );
};

export default LoanCustomerList;
