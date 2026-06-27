import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const appointments = [
    {
        id: 1,
        doctor: "Dr. Rajesh Sharma",
        specialization: "Cardiologist",
        date: "25 June 2026",
        time: "10:30 AM",
        status: "Completed",
    },
    {
        id: 2,
        doctor: "Dr. Priya Verma",
        specialization: "Dermatologist",
        date: "20 June 2026",
        time: "04:00 PM",
        status: "Cancelled",
    },
    {
        id: 3,
        doctor: "Dr. Amit Singh",
        specialization: "Neurologist",
        date: "28 June 2026",
        time: "02:00 PM",
        status: "Upcoming",
    },
];

const Appointments = () => {
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-700";
            case "Cancelled":
                return "bg-red-100 text-red-700";
            case "Upcoming":
                return "bg-blue-100 text-blue-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-33 bg-gray-900 text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Appointment <span className="text-cyan-400">History</span>
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                            Track your past, upcoming, and completed appointments with ease.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {appointments.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="bg-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">
                                            {appointment.doctor}
                                        </h3>

                                        <p className="text-cyan-400 mt-1">
                                            {appointment.specialization}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-6 text-gray-300">
                                        <div>
                                            <p className="text-sm text-gray-500">Date</p>
                                            <p>{appointment.date}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-500">Time</p>
                                            <p>{appointment.time}</p>
                                        </div>
                                    </div>

                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${appointment.status === "Completed"
                                            ? "bg-green-500/20 text-green-400"
                                            : appointment.status === "Upcoming"
                                                ? "bg-blue-500/20 text-blue-400"
                                                : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {appointment.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                                <div className="w-232 relative top-[85px] h-px bg-gray-600 mx-auto mb-3"></div>

            </div>
            <Footer />
        </>
    );
};

export default Appointments;