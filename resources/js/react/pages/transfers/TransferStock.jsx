import { useState } from "react";
import FormInput from "../../components/FormInput";
import { MoveRight } from "lucide-react";

const TransferStock = () => {
  const [formData, setFormData] = useState({
    item: "",
    from: "",
    to: "",
    quantity: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("اطلاعات انتقال:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-6 flex items-center gap-2">
        <MoveRight size={20} />
        انتقال موجودی بین گدام‌ها
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <FormInput
          label="نام آیتم"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="مثلاً: روغن"
        />
        <FormInput
          label="از گدام"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="مثلاً: گدام اصلی"
        />
        <FormInput
          label="به گدام"
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="مثلاً: گدام فرعی"
        />
        <FormInput
          label="تعداد"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="مثلاً: 10"
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          انتقال
        </button>
      </form>
    </div>
  );
};

export default TransferStock;
