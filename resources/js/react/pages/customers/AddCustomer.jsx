import { useState } from "react";
import FormInput from "../../components/FormInput";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("فرم ارسال شد:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">
        افزودن مشتری جدید
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <FormInput
          label="نام مشتری"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="مثلاً: عبدالکریم"
        />
        <FormInput
          label="شماره تماس"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="07xx xxx xxx"
        />
        <FormInput
          label="آدرس"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="کابل، افغانستان"
        />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          ثبت
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
