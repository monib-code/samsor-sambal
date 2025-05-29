import { ShoppingCart } from "lucide-react";

const PurchaseStock = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <ShoppingCart size={20} /> خرید اجناس جدید (Purchase Stock)
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام آیتم" />
        <input className="w-full border p-2 rounded" placeholder="تعداد" />
        <input className="w-full border p-2 rounded" placeholder="قیمت فی عدد" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت خرید</button>
      </form>
    </div>
  );
};

export default PurchaseStock;
