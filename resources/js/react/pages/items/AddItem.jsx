import { useState } from "react";
import FormInput from "../../components/FormInput";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">افزودن آیتم</h2>
      <form className="space-y-4 max-w-md">
        <FormInput label="نام آیتم" name="name" value={formData.name} onChange={handleChange} placeholder="مثلاً: روغن" />
        <FormInput label="کد آیتم" name="code" value={formData.code} onChange={handleChange} placeholder="مثلاً: ITM001" />
        <FormInput label="قیمت" name="price" value={formData.price} onChange={handleChange} placeholder="مثلاً: 150" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddItem;
