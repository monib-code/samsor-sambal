import { useState } from "react";
import FormInput from "../../components/FormInput";

const CustomerVoucher = () => {
  const [formData, setFormData] = useState({
    customer: "",
    amount: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("واچر مشتری:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">واچر مشتری</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <FormInput label="نام مشتری" name="customer" value={formData.customer} onChange={handleChange} />
        <FormInput label="مبلغ پرداخت" name="amount" value={formData.amount} onChange={handleChange} />
        <FormInput label="تاریخ" name="date" type="date" value={formData.date} onChange={handleChange} />
        <FormInput label="توضیحات" name="note" value={formData.note} onChange={handleChange} />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت واچر</button>
      </form>
    </div>
  );
};

export default CustomerVoucher;
