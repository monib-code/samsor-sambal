// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // انتقال به داشبورد بعد از کلیک
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-100">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
        <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">ورود به حساب</h2>
        <input className="w-full p-2 border mb-4 rounded" type="text" placeholder="نام کاربری" />
        <input className="w-full p-2 border mb-6 rounded" type="password" placeholder="رمز عبور" />
        <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Login;
