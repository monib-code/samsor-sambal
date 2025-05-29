import { useState, useEffect } from "react";
import { Moon, Sun, Globe, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fa");

  // تغییر کلاس بدنه برای دارک مود
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-teal-700 flex items-center gap-2">
        <Globe size={20} /> تنظیمات سیستم
      </h2>

      {/* 🌗 حالت تاریک / روشن */}
      <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          <span>{darkMode ? "حالت تاریک" : "حالت روشن"}</span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700"
        >
          تغییر حالت
        </button>
      </div>

      {/* 🌐 انتخاب زبان */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-100">
        <label className="block mb-2 font-medium">زبان</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 rounded border"
        >
          <option value="fa">دری</option>
          <option value="ps">پشتو</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* 👨‍💻 لینک به صفحه توسعه‌دهندگان */}
      <Link
        to="/developers"
        className="inline-flex items-center gap-2 text-teal-700 hover:underline"
      >
        <UsersRound size={18} /> درباره تیم توسعه
      </Link>
    </div>
  );
};

export default Settings;
