import { Users } from "lucide-react";

const CustomerList = () => {
  const customers = [
    { id: 1, name: "عبدالله", phone: "0700000000" },
    { id: 2, name: "hamid", phone: "0799999999" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Users size={20} /> لیست مشتری‌ها
      </h2>
      <ul className="space-y-2">
        {customers.map((c) => (
          <li
            key={c.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {c.name} - {c.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
