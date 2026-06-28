import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaBell, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
    const navigate = useNavigate();
    const [patientName, setPatientName] = useState("Patient");

    useEffect(() => {
        const name = localStorage.getItem("patientName");
        if (name) setPatientName(name);

        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("patientName");
        navigate("/login");
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen overflow-x-hidden bg-gradient-to-b pb-19 from-gray-950 via-gray-900 to-gray-950 text-white pt-34 px-6">
                
                <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-cyan-400">Profile</span>
                    </h1>
                    <p className="text-gray-400 mt-3">
                        View your account details and activity
                    </p>
                </div>

                <div
                    className="max-w-3xl mx-auto mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl"
                    data-aos="zoom-in"
                >
                    <img
                        src={`https://i.pravatar.cc/150?u=${patientName}`}
                        alt="profile"
                        className="w-28 h-28 mx-auto rounded-full border-4 border-cyan-400"
                    />

                    <h2 className="text-2xl font-semibold mt-4">{patientName}</h2>
                    <p className="text-gray-400">Patient Account</p>

                    <button
                        onClick={handleLogout}
                        className="mt-6 w-full flex items-center cursor-pointer justify-center gap-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 py-3 rounded-xl transition"
                        data-aos="fade-up"
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>

                <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-2 gap-6">

                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl" data-aos="fade-right">
                        <FaCalendarAlt className="text-cyan-400 text-2xl" />
                        <h3 className="text-xl font-semibold mt-3">Appointments</h3>
                        <p className="text-gray-400 mt-1">
                            View your booked doctor appointments
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl" data-aos="fade-left">
                        <FaBell className="text-cyan-400 text-2xl" />
                        <h3 className="text-xl font-semibold mt-3">Notifications</h3>
                        <p className="text-gray-400 mt-1">
                            Latest updates from doctors & system
                        </p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Profile;