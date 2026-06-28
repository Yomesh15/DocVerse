import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
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
                "https://docverse-2.onrender.com/api/patient/register",
                form
            );

            toast.success(res.data.message);

            setForm({
                name: "",
                email: "",
                phone: "",
                city: "",
                password: "",
            });

            navigate("/login");
        } catch (error) {
            toast.error("Registration Failed");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-5xl bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

                <div
                    className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-500 p-10"
                    data-aos="fade-right"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
                        alt="Doctor"
                        className="w-56 mb-8"
                    />

                    <h1 className="text-4xl font-bold text-white">
                        Join DocVerse
                    </h1>

                    <p className="text-blue-100 text-center mt-5 leading-8">
                        Create your patient account and easily
                        <br />
                        book appointments with trusted doctors.
                    </p>
                </div>

                <div
                    className="p-8 lg:p-12"
                    data-aos="fade-left"
                >

                    <h2
                        className="text-4xl font-bold text-white mb-2"
                        data-aos="fade-up"
                    >
                        Patient Register
                    </h2>

                    <p
                        className="text-gray-400 mb-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Fill in your details to create an account.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-5"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="bg-gray-700 text-white placeholder-gray-400 rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-gray-700 text-white placeholder-gray-400 rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            maxLength={10}
                            className="bg-gray-700 text-white placeholder-gray-400 rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={form.city}
                            onChange={handleChange}
                            className="bg-gray-700 text-white placeholder-gray-400 rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="md:col-span-2 bg-gray-700 text-white placeholder-gray-400 rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                            required
                        />

                        <button
                            type="submit"
                            className="md:col-span-2 mt-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02]"
                        >
                            Create Account
                        </button>

                    </form>

                    <p
                        className="text-center text-gray-400 mt-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Already have an account?
                        <span
                            onClick={() => navigate("/login")}
                            className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-semibold ml-2"
                        >
                            Login
                        </span>
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Register;