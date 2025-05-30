import { Landmark } from "lucide-react";

const CompanyVoucherList = () => {
  const vouchers = [
    { id: 1, company: "شرکت الف", amount: "3000" },
    { id: 2, company: "شرکت ب", amount: "5000" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Landmark size={20} /> لیست واچر شرکت‌ها
      </h2>
      <ul className="space-y-2">
        {vouchers.map((v) => (
          <li
            key={v.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            {v.company} - {v.amount} AFN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyVoucherList;
