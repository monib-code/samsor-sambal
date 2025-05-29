import { FilePlus } from "lucide-react";

const AddInvoice = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <FilePlus size={20} /> افزودن فاکتور جدید
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="شماره فاکتور" />
        <input className="w-full border p-2 rounded" placeholder="تاریخ" />
        <input className="w-full border p-2 rounded" placeholder="نام مشتری" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddInvoice;
