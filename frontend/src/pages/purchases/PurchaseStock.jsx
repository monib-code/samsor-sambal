import { useState } from "react";
import FormInput from "../../components/FormInput";

const PurchaseStock = () => {
  const [formData, setFormData] = useState({
    item: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("خرید ثبت شد:", formData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-teal-700 mb-4">ثبت خرید اجناس</h2>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <FormInput label="نام آیتم" name="item" value={formData.item} onChange={handleChange} />
        <FormInput label="تعداد" name="quantity" value={formData.quantity} onChange={handleChange} />
        <FormInput label="قیمت" name="price" value={formData.price} onChange={handleChange} />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت خرید</button>
      </form>
    </div>
  );
};

export default PurchaseStock;
