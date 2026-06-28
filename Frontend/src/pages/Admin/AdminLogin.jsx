import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    pin: "",
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
      const res = await axios.post(
        "https://docverse-2.onrender.com/api/admin/login" || "http://localhost:2006/api/admin/login",
        form
      );

      toast.success(res.data.message);

      localStorage.setItem("adminToken", res.data.token);

      setForm({
        email: "",
        pin: "",
        password: "",
      });

      navigate("/admin/patientslist");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
         
        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 p-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin"
            className="w-56 mb-8"
          />

          <h1 className="text-4xl font-bold text-white mb-4">
            Admin Portal
          </h1>

          <p className="text-purple-100 text-center leading-8">
            Login to access the admin dashboard and
            <br />
            manage doctors, patients, and appointments.
          </p>
        </div>
 
        <div className="p-8 lg:p-14">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white">
              Admin Login
            </h2>

            <p className="text-gray-400 mt-2">
              Enter your admin credentials.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
              required
            />

            <input
              type="number"
              name="pin"
              value={form.pin}
              onChange={handleChange}
              placeholder="Admin PIN"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
              required
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-purple-500 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02]"
            >
              Login as Admin
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;