import { useState } from "react";
import FormInput from "../components/FormInput";

const Currencies = () => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    rate: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ارز ثبت شد:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">مدیریت ارزها</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <FormInput label="نام ارز" name="name" value={formData.name} onChange={handleChange} />
        <FormInput label="نماد" name="symbol" value={formData.symbol} onChange={handleChange} />
        <FormInput label="نرخ تبدیل به AFN" name="rate" value={formData.rate} onChange={handleChange} />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت ارز</button>
      </form>
    </div>
  );
};

export default Currencies;
