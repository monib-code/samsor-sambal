import { useState } from "react";
import FormInput from "../../components/FormInput";

const CompanyVoucher = () => {
  const [formData, setFormData] = useState({
    company: "",
    amount: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("واچر شرکت:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">واچر شرکت</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <FormInput label="نام شرکت" name="company" value={formData.company} onChange={handleChange} />
        <FormInput label="مبلغ پرداخت" name="amount" value={formData.amount} onChange={handleChange} />
        <FormInput label="تاریخ پرداخت" name="date" type="date" value={formData.date} onChange={handleChange} />
        <FormInput label="توضیحات" name="note" value={formData.note} onChange={handleChange} />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت واچر</button>
      </form>
    </div>
  );
};

export default CompanyVoucher;
