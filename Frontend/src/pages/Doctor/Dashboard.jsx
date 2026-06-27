import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    FaUserMd,
    FaCalendarCheck,
    FaClock,
    FaCheckCircle,
} from "react-icons/fa";

import DoctorNavbar from "./DoctorNavbar";
import DoctorFooter from "./DoctorFooter";

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");

            await axios.patch(
                `http://localhost:2006/api/appointment/status/${id}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            getAppointments();

        } catch (err) {
            console.log(err);
        }
    };

    const getAppointments = async () => {
        try {
            const token = localStorage.getItem("doctorToken");

            const res = await axios.get(
                "http://localhost:2006/api/appointment/doctor",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.success) {
                setAppointments(res.data.appointments);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAppointments();
    }, []);


    const stats = {
        total: appointments.length,
        pending: appointments.filter(
            (a) => a.status === "Pending"
        ).length,
        approved: appointments.filter(
            (a) => a.status === "Accepted"
        ).length,
    };

    return (
        <>
            <div className="bg-gray-950 pb-10 text-white p-6 md:p-10">
                <DoctorNavbar />

                <div className="flex flex-col md:flex-row pb-7 md:items-center pt-20 justify-between ">

                    <div>
                        <h1 className="text-3xl font-bold flex items-center gap-2">
                            <FaUserMd className="text-cyan-400" />
                            Doctor Dashboard
                        </h1>
                        <p className="text-gray-400 mt-1">
                            Manage your appointments and patients
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0 bg-white/5 px-5 py-3 rounded-xl border border-white/10">
                        <p className="text-sm text-gray-400">Logged in as</p>
                        <p className="font-semibold text-cyan-400">DocVerse Doctor</p>
                    </div>

                </div>

                <div className="grid sm:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <FaCalendarCheck className="text-cyan-400 text-2xl" />
                        <h2 className="text-2xl font-bold mt-2">{stats.total}</h2>
                        <p className="text-gray-400">Total Appointments</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <FaClock className="text-yellow-400 text-2xl" />
                        <h2 className="text-2xl font-bold mt-2">{stats.pending}</h2>
                        <p className="text-gray-400">Pending</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <FaCheckCircle className="text-green-400 text-2xl" />
                        <h2 className="text-2xl font-bold mt-2">{stats.approved}</h2>
                        <p className="text-gray-400">Approved</p>
                    </div>

                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

                    <div className="p-5 border-b border-white/10">
                        <h2 className="text-xl font-semibold">
                            Appointments Requests
                        </h2>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            <thead className="text-gray-400 text-sm border-b border-white/10">
                                <tr>
                                    <th className="p-4">Patient</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Time</th>
                                    <th className="p-4">Problem</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="text-center p-8">
                                            Loading appointments...
                                        </td>
                                    </tr>
                                ) : appointments.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center p-8 text-gray-400">
                                            No appointments found.
                                        </td>
                                    </tr>
                                ) : (
                                    appointments.map((app) => (
                                        <tr
                                            key={app._id}
                                            className="border-b border-white/5"
                                        >
                                            <td className="p-4">
                                                <h3 className="font-semibold">
                                                    {app.patient.name}
                                                </h3>

                                                <p className="text-sm text-gray-400">
                                                    {app.patient.email}
                                                </p>

                                                <p className="text-sm text-gray-400">
                                                    {app.patient.phone}
                                                </p>

                                                <p className="text-sm text-gray-400">
                                                    {app.patient.city}
                                                </p>
                                            </td>

                                            <td className="p-4">
                                                {new Date(
                                                    app.appointmentDate
                                                ).toLocaleDateString()}
                                            </td>

                                            <td className="p-4">
                                                {app.appointmentTime}
                                            </td>

                                            <td className="p-4 max-w-xs">
                                                <p className="whitespace-normal break-words">
                                                    {app.problem || "N/A"}
                                                </p>
                                            </td>

                                            <td className="p-4">
                                                {app.status === "Pending" && (
                                                    <span className="text-yellow-400 font-semibold">
                                                        Pending
                                                    </span>
                                                )}

                                                {app.status === "Accepted" && (
                                                    <span className="text-green-400 font-semibold">
                                                        Accepted
                                                    </span>
                                                )}

                                                {app.status === "Rejected" && (
                                                    <span className="text-red-400 font-semibold">
                                                        Rejected
                                                    </span>
                                                )}
                                            </td>

                                            <td className="p-4 flex gap-2">
                                                <button
                                                    onClick={() => handleStatus(app._id, "Accepted")}
                                                    disabled={app.status !== "Pending"}
                                                    className={`px-3 py-1 rounded-lg text-sm relative top-[8px] transition
                                                        ${app.status === "Pending"
                                                            ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                                                            : "bg-green-900 text-gray-300 cursor-not-allowed opacity-60"
                                                        }`}
                                                >
                                                    Accept
                                                </button>

                                                <button
                                                    onClick={() => handleStatus(app._id, "Rejected")}
                                                    disabled={app.status !== "Pending"}
                                                    className={`px-3 py-1 rounded-lg text-sm relative top-[8px] transition
                                                        ${app.status === "Pending"
                                                            ? "bg-red-500 hover:bg-red-600 cursor-pointer"
                                                            : "bg-red-900 text-gray-300 cursor-not-allowed opacity-60"
                                                        }`}
                                                >
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>

                        </table>

                    </div>

                </div>
                <div className="spacing pt-22">
                    <DoctorFooter />
                </div>
            </div>
        </>
    );
};

export default Dashboard;