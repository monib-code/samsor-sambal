import { Building2 } from "lucide-react";

const CompanyList = () => {
  const companies = [
    { id: 1, name: "شرکت الف", phone: "0701234567" },
    { id: 2, name: "شرکت ب", phone: "0787654321" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <Building2 size={20} /> لیست شرکت‌ها
      </h2>
      <ul className="space-y-2">
        {companies.map((c) => (
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

export default CompanyList;
