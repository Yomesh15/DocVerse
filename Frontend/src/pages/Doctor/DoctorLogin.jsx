import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://doc-verse-gamma.vercel.app/api/doctor/login" || "http://localhost:2006/api/doctor/login",
        form
      );

      toast.success(res.data.message);
      // console.log(res);


      // Save token when you add JWT
      localStorage.setItem("doctorToken", res.data.token);
      localStorage.setItem("doctorName", res.data.doctor.name);

      setForm({
        email: "",
        password: "",
      });

      navigate("/doctor/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">


        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-500 p-10">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
            alt="Doctor"
            className="w-56 mb-8"
          />

          <h1 className="text-4xl font-bold text-white">
            Doctor Portal
          </h1>

          <p className="text-blue-100 text-center mt-5 leading-8">
            Welcome back Doctor.
            <br />
            Login to manage appointments,
            patients and your profile.
          </p>

        </div>


        <div className="p-8 lg:p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-white mb-2">
            Doctor Login
          </h2>

          <p className="text-gray-400 mb-8">
            Sign in to your doctor account.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition"
              required
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have a doctor account?
            <span
              onClick={() => navigate("/doctor/register")}
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

export default DoctorLogin;