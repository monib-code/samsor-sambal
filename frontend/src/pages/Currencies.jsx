import { DollarSign } from "lucide-react";

const Currencies = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <DollarSign size={20} /> مدیریت ارزها (Currencies)
      </h2>

      <form className="space-y-4 max-w-md mb-6">
        <input className="w-full border p-2 rounded" placeholder="نام ارز (مثلاً: افغانی)" />
        <input className="w-full border p-2 rounded" placeholder="نماد (مثلاً: AFN)" />
        <input className="w-full border p-2 rounded" placeholder="نرخ به افغانی (مثلاً: 1)" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          ثبت ارز
        </button>
      </form>

      <div className="bg-gray-100 p-4 rounded">
        <p>AFN - افغانی - نرخ: 1</p>
        <p>USD - دالر - نرخ: 87.5</p>
      </div>
    </div>
  );
};

export default Currencies;
