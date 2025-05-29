import { useState } from "react";
import FormInput from "../../components/FormInput";

const LoanVoucher = () => {
  const [formData, setFormData] = useState({
    customer: "",
    amount: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("واچر قرض:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">ثبت واچر قرض</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <FormInput label="نام مشتری" name="customer" value={formData.customer} onChange={handleChange} />
        <FormInput label="مبلغ قرض" name="amount" value={formData.amount} onChange={handleChange} />
        <FormInput label="تاریخ" name="date" type="date" value={formData.date} onChange={handleChange} />
        <FormInput label="توضیحات" name="note" value={formData.note} onChange={handleChange} />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default LoanVoucher;
