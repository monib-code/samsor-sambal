import {
  Users,
  Building2,
  FileText,
  ShoppingCart,
  Boxes,
  Wallet,
  HandCoins,
  Landmark,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "تعداد مشتری‌ها",
      value: 126,
      icon: <Users size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "تعداد شرکت‌ها",
      value: 42,
      icon: <Building2 size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "فاکتورهای صادرشده",
      value: 87,
      icon: <FileText size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "خریدها (Purchase)",
      value: 54,
      icon: <ShoppingCart size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "موجودی در گدام",
      value: 320,
      icon: <Boxes size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "کل مصارف",
      value: "89,500 AFN",
      icon: <Wallet size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "قرض مشتریان",
      value: "15,000 AFN",
      icon: <HandCoins size={28} className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "واچر شرکت‌ها",
      value: 30,
      icon: <Landmark size={28} className="text-teal-600 dark:text-teal-400" />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
        داشبورد سیستم حسابداری
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-lg shadow-md flex items-center justify-between transition-colors"
          >
            <div>
              <p className="text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
