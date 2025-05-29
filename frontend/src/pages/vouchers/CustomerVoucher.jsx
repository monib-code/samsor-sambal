import { WalletCards } from "lucide-react";

const CustomerVoucher = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <WalletCards size={20} /> ثبت واچر مشتری (Customer Voucher)
      </h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام مشتری" />
        <input className="w-full border p-2 rounded" placeholder="مبلغ پرداخت" />
        <input className="w-full border p-2 rounded" placeholder="تاریخ پرداخت" />
        <textarea className="w-full border p-2 rounded" placeholder="توضیحات"></textarea>
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          ثبت واچر
        </button>
      </form>
    </div>
  );
};

export default CustomerVoucher;
