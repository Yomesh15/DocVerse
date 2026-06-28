import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify"
import Footer from "../components/Footer";
import {
    FaHospital,
    FaMapMarkerAlt,
    FaStar,
    FaUserMd,
    FaGraduationCap,
    FaMoneyBillWave,
    FaCheckCircle,
    FaClock,
    FaVenusMars,
} from "react-icons/fa";

const DoctorInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [problem, setProblem] = useState("");

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                setLoading(true);

                const res = await axios.get(
                    "https://docverse-2.onrender.com/api/doctor/getalldoctors" || "http://localhost:2006/api/doctor/getalldoctors"
                );

                const foundDoctor = res.data.doctorss.find(
                    (doc) => doc._id === id
                );

                setDoctor(foundDoctor);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };


        fetchDoctors();
    }, [id]);

    const bookappointment = async () => {
        try {
            const token = localStorage.getItem("token");


            const res = await axios.post(
                "https://docverse-2.onrender.com/api/appointment/book" || "http://localhost:2006/api/appointment/book",
                {
                    doctorId: doctor._id,
                    appointmentDate,
                    appointmentTime,
                    problem,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(res.data.message);

            navigate("/")

        } catch (error) {
            console.log(error);

            toast.error("Failed to Book Appointment ")
        }
    };


    if (!doctor) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 pt-24">
                    <div className="w-full max-w-6xl animate-pulse bg-white/5 border border-white/10 rounded-3xl overflow-hidden grid lg:grid-cols-3">

                        <div className="p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-700"></div>

                            <div className="mt-6 w-40 h-6 bg-gray-700 rounded"></div>
                            <div className="mt-3 w-32 h-4 bg-gray-700 rounded"></div>

                            <div className="flex gap-3 mt-5">
                                <div className="w-20 h-6 bg-gray-700 rounded-full"></div>
                                <div className="w-24 h-6 bg-gray-700 rounded-full"></div>
                            </div>

                            <div className="mt-5 w-28 h-6 bg-gray-700 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-2 p-8 md:p-12 space-y-6">

                            <div className="w-60 h-8 bg-gray-700 rounded"></div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-24 bg-gray-700 rounded-2xl"
                                    ></div>
                                ))}
                            </div>

                            <div className="h-28 bg-gray-700 rounded-2xl"></div>

                            <div className="h-28 bg-gray-700 rounded-2xl"></div>

                            <div className="flex gap-5 pt-4">
                                <div className="flex-1 h-14 bg-gray-700 rounded-xl"></div>
                                <div className="flex-1 h-14 bg-gray-700 rounded-xl"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white pt-28 pb-20 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                        <div className="grid lg:grid-cols-3">

                            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex flex-col items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-white/10">

                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
                                />

                                <div className="mt-8 text-center">

                                    <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                                        {doctor.name}

                                        {doctor.verified && (
                                            <FaCheckCircle className="text-blue-500 text-2xl" />
                                        )}
                                    </h1>

                                    <p className="text-cyan-400 text-lg mt-2">
                                        {doctor.speciality}
                                    </p>

                                    <div className="flex justify-center flex-wrap gap-3 mt-5">

                                        <span className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full">
                                            <FaStar className="text-yellow-400" />
                                            {doctor.rating}
                                        </span>

                                        <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                                            {doctor.totalReviews} Reviews
                                        </span>

                                    </div>

                                    <div className="mt-5">

                                        {doctor.available ? (
                                            <span className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full inline-flex items-center gap-2">
                                                <FaClock />
                                                Available Today
                                            </span>
                                        ) : (
                                            <span className="bg-red-500/20 text-red-400 px-5 py-2 rounded-full inline-flex items-center gap-2">
                                                <FaClock />
                                                Not Available
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>

                            <div className="lg:col-span-2 p-8 md:p-12">

                                <h2 className="text-3xl font-bold mb-8">
                                    Doctor Information
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-6">

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaGraduationCap className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">Qualification</p>
                                        <h3 className="font-semibold text-lg">
                                            {doctor.qualification}
                                        </h3>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaUserMd className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">Experience</p>
                                        <h3 className="font-semibold text-lg">
                                            {doctor.experience} Years
                                        </h3>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaHospital className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">Hospital</p>
                                        <h3 className="font-semibold text-lg">
                                            {doctor.hospital}
                                        </h3>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaVenusMars className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">Gender</p>
                                        <h3 className="font-semibold text-lg">
                                            {doctor.gender}
                                        </h3>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaMapMarkerAlt className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">City</p>
                                        <h3 className="font-semibold text-lg">
                                            {doctor.city}
                                        </h3>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-5">
                                        <FaMoneyBillWave className="text-cyan-400 text-2xl mb-3" />
                                        <p className="text-gray-400">Consultation Fee</p>
                                        <h3 className="font-bold text-2xl text-green-400">
                                            ₹{doctor.fees}
                                        </h3>
                                    </div>

                                </div>

                                <div className="bg-white/5 rounded-2xl p-6 mt-8">
                                    <h3 className="text-2xl font-bold mb-3">
                                        Clinic Address
                                    </h3>

                                    <p className="text-gray-300 leading-7">
                                        {doctor.address}
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-6 mt-8">
                                    <h3 className="text-2xl font-bold mb-3">
                                        About Doctor
                                    </h3>

                                    <p className="text-gray-300 leading-8">
                                        {doctor.about
                                            ? doctor.about
                                            : "This doctor is dedicated to providing compassionate and high-quality healthcare with years of professional experience. Book an appointment to receive expert medical consultation."}
                                    </p>
                                </div>

                                <div className="mt-10 space-y-4">

                                    <input
                                        type="date"
                                        value={appointmentDate}
                                        onChange={(e) => setAppointmentDate(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3"
                                    />

                                    <input
                                        type="time"
                                        value={appointmentTime}
                                        onChange={(e) => setAppointmentTime(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3"
                                    />

                                    <textarea
                                        placeholder="Describe your problem..."
                                        value={problem}
                                        onChange={(e) => setProblem(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3"
                                        rows={4}
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 mt-10">

                                    <button className="flex-1 cursor-pointer bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-semibold text-lg" onClick={() => {
                                        bookappointment()
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}>
                                        Book Appointment
                                    </button>

                                    {/* <button className="flex-1 border border-white/20 hover:bg-white/10 transition py-4 rounded-xl font-semibold">
                                        View Reviews
                                    </button> */}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default DoctorInfo;