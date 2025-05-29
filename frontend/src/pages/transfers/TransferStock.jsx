import { MoveRight } from "lucide-react";

const TransferStock = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <MoveRight size={20} /> انتقال موجودی بین انبارها (Transfer Stock)
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام آیتم" />
        <input className="w-full border p-2 rounded" placeholder="تعداد برای انتقال" />
        <input className="w-full border p-2 rounded" placeholder="از انبار (نام)" />
        <input className="w-full border p-2 rounded" placeholder="به انبار (نام)" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          ثبت انتقال
        </button>
      </form>
    </div>
  );
};

export default TransferStock;
