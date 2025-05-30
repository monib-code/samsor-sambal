import { FileText } from "lucide-react";

const InvoiceList = () => {
  const invoices = [
    { id: 1, number: "INV001", customer: "عبدالله", total: 450 },
    { id: 2, number: "INV002", customer: "فاطمه", total: 620 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-400 mb-4 flex items-center gap-2">
        <FileText size={20} /> لیست فاکتورها
      </h2>
      <ul className="space-y-2">
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className="p-4 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
          >
            شماره: {invoice.number} - مشتری: {invoice.customer} - جمع: {invoice.total} AFN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
