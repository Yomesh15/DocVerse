import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientsList = () => {
    const navigate = useNavigate();

    const [allusers, setallusers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
    };

    useEffect(() => {
        const fetchusers = async () => {
            try {
                const res = await axios.get(
                    "https://docverse-2.onrender.com/api/patient/getallusers" || "http://localhost:2006/api/patient/getallusers"
                );

                setallusers(res.data.allusers);
                console.log(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchusers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Patients Management
                    </h1>

                    <p className="text-gray-400 mt-2">
                        View and manage all registered patients
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                    Logout
                </button>
            </div>
 
            <div className="bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-700">
                <h2 className="text-lg text-gray-300">Total Patients</h2>

                <p className="text-4xl font-bold text-cyan-400 mt-2">
                    {allusers.length}
                </p>
            </div>

            {loading ? (
                <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 border border-gray-700 rounded-2xl p-5 animate-pulse"
                        >
                            <div className="h-6 w-40 bg-gray-700 rounded mb-4"></div>

                            <div className="space-y-3">
                                <div className="h-4 bg-gray-700 rounded w-full"></div>
                                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                                <div className="h-4 bg-gray-700 rounded w-3/6"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <> 
                    <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-700">
                        <table className="w-full">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="px-6 py-4 text-left">Name</th>
                                    <th className="px-6 py-4 text-left">Email</th>
                                    <th className="px-6 py-4 text-left">Phone</th>
                                    <th className="px-6 py-4 text-left">City</th>
                                    <th className="px-6 py-4 text-left">Registered</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allusers.map((user) => (
                                    <tr
                                        key={user._id}
                                        className="border-t border-gray-700 hover:bg-gray-800/60 transition"
                                    >
                                        <td className="px-6 py-4">{user.name}</td>

                                        <td className="px-6 py-4 text-gray-300">
                                            {user.email}
                                        </td>

                                        <td className="px-6 py-4">{user.phone}</td>

                                        <td className="px-6 py-4">{user.city}</td>

                                        <td className="px-6 py-4 text-gray-400">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
 
                    <div className="grid gap-5 lg:hidden">
                        {allusers.map((user) => (
                            <div
                                key={user._id}
                                className="bg-gray-800 border border-gray-700 rounded-2xl p-5"
                            >
                                <h2 className="text-xl font-semibold text-cyan-400">
                                    {user.name}
                                </h2>

                                <div className="mt-4 space-y-2 text-gray-300">
                                    <p>
                                        <span className="font-medium text-white">
                                            Email:
                                        </span>{" "}
                                        {user.email}
                                    </p>

                                    <p>
                                        <span className="font-medium text-white">
                                            Phone:
                                        </span>{" "}
                                        {user.phone}
                                    </p>

                                    <p>
                                        <span className="font-medium text-white">
                                            City:
                                        </span>{" "}
                                        {user.city}
                                    </p>

                                    <p>
                                        <span className="font-medium text-white">
                                            Registered:
                                        </span>{" "}
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
 
                    {allusers.length === 0 && (
                        <div className="text-center py-20">
                            <h2 className="text-2xl text-gray-400">
                                No Patients Found
                            </h2>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PatientsList;