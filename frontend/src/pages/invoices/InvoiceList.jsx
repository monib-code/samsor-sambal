import { FileText } from "lucide-react";

const InvoiceList = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <FileText size={20} /> لیست فاکتورها
      </h2>
      <ul className="space-y-2">
        <li className="p-3 bg-gray-100 rounded">فاکتور شماره ۱۲۳۴</li>
        <li className="p-3 bg-gray-100 rounded">فاکتور شماره ۱۲۳۵</li>
      </ul>
    </div>
  );
};

export default InvoiceList;
