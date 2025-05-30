import { Wallet } from "lucide-react";

const ExpensesList = () => {
  const expenses = [
    { id: 1, title: "کرایه دکان", amount: 5000 },
    { id: 2, title: "برق", amount: 1200 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Wallet size={20} /> لیست مصارف
      </h2>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {expense.title} - مبلغ: {expense.amount} AFN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
