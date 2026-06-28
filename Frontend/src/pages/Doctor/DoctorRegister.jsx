import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorRegister = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const [form, setform] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        speciality: "",
        qualification: "",
        experience: "",
        fees: "",
        hospital: "",
        city: "",
        address: "",
        about: "",
        image: "",
        gender: "",
    });

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await axios.post(
                "https://doc-verse-gamma.vercel.app/api/doctor/register" || "http://localhost:2006/api/doctor/register",
                form
            );

            toast.success(res.data.message);

            setform({
                name: "",
                email: "",
                phone: "",
                password: "",
                speciality: "",
                qualification: "",
                experience: "",
                fees: "",
                hospital: "",
                city: "",
                address: "",
                about: "",
                image: "",
                gender: "",
            });
            navigate("/doctor/login")
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

                <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-500 p-10">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2785/2785544.png"
                        alt=""
                        className="w-56 mb-8"
                    />

                    <h1 className="text-4xl font-bold text-white">
                        Doctor Registration
                    </h1>

                    <p className="text-blue-100 mt-5 text-center leading-8">
                        Join our healthcare platform and connect with thousands of
                        patients.
                        <br />
                        Your account will be verified by the administrator before
                        appointments become available.
                    </p>

                </div>


                <div className="p-8 lg:p-12">

                    <h2 className="text-3xl font-bold text-white mb-2">
                        Create Account
                    </h2>

                    <p className="text-gray-400 mb-8">
                        Fill all required information
                    </p>

                    <form
                        onSubmit={handlesubmit}
                        className="grid md:grid-cols-2 gap-5"
                    >


                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handlechange}
                            placeholder="Full Name"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handlechange}
                            placeholder="Email"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />



                        <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handlechange}
                            placeholder="Phone Number"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handlechange}
                            placeholder="Password"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="text"
                            name="speciality"
                            value={form.speciality}
                            onChange={handlechange}
                            placeholder="Speciality"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="text"
                            name="qualification"
                            value={form.qualification}
                            onChange={handlechange}
                            placeholder="Qualification"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="number"
                            name="experience"
                            value={form.experience}
                            onChange={handlechange}
                            placeholder="Experience (Years)"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="number"
                            name="fees"
                            value={form.fees}
                            onChange={handlechange}
                            placeholder="Consultation Fees"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="text"
                            name="hospital"
                            value={form.hospital}
                            onChange={handlechange}
                            placeholder="Hospital / Clinic"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handlechange}
                            placeholder="City"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handlechange}
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>


                        <input
                            type="text"
                            name="image"
                            value={form.image}
                            onChange={handlechange}
                            placeholder="Profile Image URL"
                            className="bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500"
                        />


                        <textarea
                            name="address"
                            value={form.address}
                            onChange={handlechange}
                            rows="3"
                            placeholder="Complete Address"
                            className="md:col-span-2 bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500 resize-none"
                        />


                        <textarea
                            name="about"
                            value={form.about}
                            onChange={handlechange}
                            rows="4"
                            placeholder="Tell patients about yourself..."
                            className="md:col-span-2 bg-gray-700 text-white rounded-xl p-3 outline-none border border-gray-600 focus:border-blue-500 resize-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="md:col-span-2 mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] disabled:opacity-60"
                        >
                            {loading ? "Registering..." : "Register as Doctor"}
                        </button>

                    </form>
                    <p className="text-center text-gray-400 mt-8">
                        Have an Account ? 
                        <span
                            onClick={() => navigate("/doctor/login")}
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

export default DoctorRegister;