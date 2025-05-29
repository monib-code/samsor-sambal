import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // 📥 Login Logic Here (e.g. API call)
      console.log("Logging in:", formData);
    } else {
      // ✏️ Register Logic Here (e.g. API call)
      console.log("Registering:", formData);
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-4">
          {isLogin ? "ورود به حساب" : "ساخت حساب ادمین"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? (
            <>
              حساب نداری؟{" "}
              <button
                className="text-teal-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                ثبت‌نام کن
              </button>
            </>
          ) : (
            <>
              قبلاً ثبت‌نام کردی؟{" "}
              <button
                className="text-teal-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                وارد شو
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
