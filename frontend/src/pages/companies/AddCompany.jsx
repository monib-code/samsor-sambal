import { useState } from "react";
import FormInput from "../../components/FormInput";

const AddCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">افزودن شرکت</h2>
      <form className="space-y-4 max-w-md">
        <FormInput label="نام شرکت" name="name" value={formData.name} onChange={handleChange} placeholder="مثلاً شاهین گروپ" />
        <FormInput label="شماره تماس" name="phone" value={formData.phone} onChange={handleChange} placeholder="07xx xxx xxx" />
        <FormInput label="آدرس" name="address" value={formData.address} onChange={handleChange} placeholder="هرات، افغانستان" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddCompany;
