// src/pages/customers/CustomerDetails.jsx
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700">جزئیات مشتری {id}</h2>
      <p>نام: مشتری مثال</p>
      <p>شماره تماس: 0700000000</p>
      <p>آدرس: کابل، افغانستان</p>
    </div>
  );
};

export default CustomerDetails;
