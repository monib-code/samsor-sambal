// src/pages/customers/AddCustomer.jsx
const AddCustomer = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700">افزودن مشتری جدید</h2>
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="نام مشتری" />
        <input className="w-full border p-2 rounded" placeholder="شماره تماس" />
        <input className="w-full border p-2 rounded" placeholder="آدرس" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">ثبت</button>
      </form>
    </div>
  );
};

export default AddCustomer;
