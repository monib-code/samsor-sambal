import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "../components/assets/logo.png"; // 👈 مسیر به لوگو

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-teal-600 text-white flex-col">
      <img src={companyLogo} alt="لوگو شرکت" className="w-24 h-24 mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold">به سیستم حسابداری سمسور سمبال خوش آمد </h1>
          <p className="mt-2">توسعه‌یافته توسط تیم سمسور </p>
    </div>
  );
};

export default Splash;
