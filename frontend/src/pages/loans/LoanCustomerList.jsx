import { HandCoins } from "lucide-react";

const LoanCustomerList = () => {
  const loans = [
    { id: 1, name: "عبدالله", amount: 3000 },
    { id: 2, name: "فاطمه", amount: 1200 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <HandCoins size={20} /> مشتریان قرض‌دار
      </h2>
      <ul className="space-y-2">
        {loans.map((loan) => (
          <li
            key={loan.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {loan.name} - مبلغ قرض: {loan.amount} AFN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanCustomerList;
