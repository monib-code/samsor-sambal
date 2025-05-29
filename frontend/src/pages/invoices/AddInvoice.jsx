import { useState } from "react";
import FormInput from "../../components/FormInput";

const AddInvoice = () => {
  const [formData, setFormData] = useState({
    number: "",
    date: "",
    customer: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">افزودن فاکتور</h2>
      <form className="space-y-4 max-w-md">
        <FormInput label="شماره فاکتور" name="number" value={formData.number} onChange={handleChange} placeholder="مثلاً: 1234" />
        <FormInput label="تاریخ" name="date" type="date" value={formData.date} onChange={handleChange} />
        <FormInput label="نام مشتری" name="customer" value={formData.customer} onChange={handleChange} placeholder="عبدالله" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت فاکتور</button>
      </form>
    </div>
  );
};

export default AddInvoice;
