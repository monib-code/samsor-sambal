import { PackagePlus } from "lucide-react";

const AddItem = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <PackagePlus size={20} /> افزودن آیتم جدید
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام آیتم" />
        <input className="w-full border p-2 rounded" placeholder="کد محصول" />
        <input className="w-full border p-2 rounded" placeholder="قیمت" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddItem;
