import { WalletCards } from "lucide-react";

const CustomerVoucherList = () => {
  const vouchers = [
    { id: 1, name: "عبدالله", amount: "1000" },
    { id: 2, name: "فاطمه", amount: "2000" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <WalletCards size={20} /> لیست واچر مشتری‌ها
      </h2>
      <ul className="space-y-2">
        {vouchers.map((v) => (
          <li
            key={v.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {v.name} - {v.amount} AFN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerVoucherList;
