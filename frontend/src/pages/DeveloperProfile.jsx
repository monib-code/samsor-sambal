// src/components/DeveloperProfile.jsx

import hamidImg from "../components/assets/hamid.jpg";
import monibImg from "../components/assets/monib.png"; // اگر برای منیب عکس جدا داری، اسم فایلش رو بده تا جایگزین کنم

const developers = [
  {
    name: "حمیدالله رحمانی",
    phone: "0791323424",
    email: "hamidrahmmani1003@gmail.com",
    image: hamidImg,
  },
  {
    name: "منیب الرحمان صدیقی",
    phone: "0789896997",
    email: "monib.dev@example.com",
    image: monibImg,
  },
];

const DeveloperProfile = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6">
        توسعه‌دهندگان سیستم
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow flex items-center gap-4"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-teal-500"
            />
            <div>
              <h3 className="text-lg font-semibold">{dev.name}</h3>
              <p className="text-sm">📞 {dev.phone}</p>
              <p className="text-sm">📧 {dev.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperProfile;
