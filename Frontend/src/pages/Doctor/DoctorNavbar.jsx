import React, { useEffect, useRef, useState } from "react";
import { FaUserMd, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [doctorname, setdoctorname] = useState("Doctor")

  const profileRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);
  }, []);


  useEffect(()=>{
    const name = localStorage.getItem("doctorName")
    setdoctorname(name)
  },[])

  const logout = () => {
    localStorage.removeItem("doctorToken");
    localStorage.removeItem("doctorName");
    navigate("/doctor/login");
  };


  return (
    <nav className="bg-gray-950 border-b border-white/10 text-white px-6 py-4 fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/doctor-dashboard")}
        >
          <FaUserMd className="text-cyan-400 text-2xl" />
          <h1 className="text-xl font-bold">
            Doctor<span className="text-cyan-400">Panel</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <button
            onClick={() => navigate("/doctor-dashboard")}
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/doctor-dashboard?tab=appointments")}
            className="hover:text-cyan-400 transition"
          >
            Appointments
          </button>

          <button className="hover:text-cyan-400 transition">
            Patients
          </button>

          <button className="hover:text-cyan-400 transition">
            Profile
          </button>

        </div>

        <div className="flex items-center gap-4">

          <div className="relative cursor-pointer">
            <FaBell className="text-xl text-gray-300 hover:text-cyan-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          <div
            className="relative hidden md:block"
            ref={profileRef}
          >
            <button
              onClick={() =>
                setProfileOpen(!profileOpen)
              }
              className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10 hover:border-cyan-400 transition"
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                D
              </div>

              <span className="text-sm">
                {doctorname}
              </span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-60 bg-gray-900 rounded-xl border border-white/10 shadow-xl overflow-hidden">

                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                >
                  👨‍⚕️ My Profile
                </button>

                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                >
                  📅 My Schedule
                </button>

                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                >
                  💰 Consultation Fees
                </button>

                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                >
                  🔔 Notifications
                </button>

                <button
                  className="w-full text-left px-4 py-3 hover:bg-white/10"
                >
                  ⚙️ Settings
                </button>

                <hr className="border-white/10" />

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10"
                >
                  🚪 Logout
                </button>

              </div>
            )}
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-900 p-4 rounded-xl border border-white/10">

          <button onClick={() => navigate("/doctor/dashboard")}>
            Dashboard
          </button>

          <button>
            Appointments
          </button>

          <button>
            Patients
          </button>

          <button>
            Profile
          </button>

        </div>
      )}

    </nav>
  );
};

export default DoctorNavbar;