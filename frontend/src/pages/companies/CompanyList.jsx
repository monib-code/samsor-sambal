import { Building } from "lucide-react";

const CompanyList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <Building size={20} /> لیست شرکت‌ها
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">شرکت الف</li>
        <li className="p-3 bg-gray-100 rounded">شرکت ب</li>
      </ul>
    </div>
  );
};

export default CompanyList;
