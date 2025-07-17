import { useParams } from "react-router-dom";
import { FileSignature } from "lucide-react";

const InvoiceDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
        <FileSignature size={20} /> جزئیات فاکتور {id}
      </h2>
      <p>مشتری: محمدی</p>
      <p>تاریخ: ۱۴۰۳/۰۳/۱۰</p>
      <p>جمع کل: ۱۲۵۰ AFN</p>
    </div>
  );
};

export default InvoiceDetails;
