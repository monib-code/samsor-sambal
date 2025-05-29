import { Users, FileText, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-teal-700">داشبورد مدیریتی</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* مشتری‌ها */}
        <div className="bg-white rounded shadow p-5 border-l-4 border-teal-600">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">مشتری‌ها</h2>
              <p className="text-xl font-semibold">152</p>
            </div>
            <Users className="text-teal-600" size={32} />
          </div>
          <Link to="/customers" className="text-sm mt-4 inline-flex items-center text-teal-700 hover:underline">
            مدیریت مشتری‌ها <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {/* فاکتورها */}
        <div className="bg-white rounded shadow p-5 border-l-4 border-teal-600">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">فاکتورهای امروز</h2>
              <p className="text-xl font-semibold">17</p>
            </div>
            <FileText className="text-teal-600" size={32} />
          </div>
          <Link to="#" className="text-sm mt-4 inline-flex items-center text-teal-700 hover:underline">
            مشاهده فاکتورها <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {/* موجودی کل */}
        <div className="bg-white rounded shadow p-5 border-l-4 border-teal-600">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">موجودی کل</h2>
              <p className="text-xl font-semibold">۱۲۳,۴۵۰ AFN</p>
            </div>
            <DollarSign className="text-teal-600" size={32} />
          </div>
          <Link to="#" className="text-sm mt-4 inline-flex items-center text-teal-700 hover:underline">
            مشاهده جزئیات <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
