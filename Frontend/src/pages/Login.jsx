import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://docverse-2.onrender.com/api/patient/login",
        form
      );

      toast.success(res.data.message);

      setForm({
        email: "",
        password: "",
      });

      localStorage.setItem("token", res.data.token);

      const name = res.data.message.split(" ")[1];
      localStorage.setItem("patientName", name);

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        <div
          className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 p-10"
          data-aos="fade-right"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
            alt="Doctor"
            className="w-56 mb-8"
          />

          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome Back
          </h1>

          <p className="text-blue-100 text-center leading-8">
            Login to your account and continue using
            <br />
            our healthcare platform.
          </p>
        </div>

        <div
          className="p-8 lg:p-14"
          data-aos="fade-left"
        >

          <div className="mb-8" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white">
              Patient Login
            </h2>

            <p className="text-gray-400 mt-2">
              Enter your credentials to continue.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
              required
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02]"
            >
              Login
            </button>

          </form>

          <p
            className="text-center text-gray-400 mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-semibold ml-2"
            >
              Register
            </span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;