import { Building2 } from "lucide-react";

const AddCompany = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <Building2 size={20} /> افزودن شرکت جدید
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام شرکت" />
        <input className="w-full border p-2 rounded" placeholder="شماره تماس" />
        <input className="w-full border p-2 rounded" placeholder="آدرس" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddCompany;
