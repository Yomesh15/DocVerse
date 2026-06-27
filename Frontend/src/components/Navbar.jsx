import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaBars,
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaHeart,
  FaFileMedical,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [patientname, setpatientname] = useState("Patient")

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const token = localStorage.getItem("token")


  const [isLoggedIn, setisLoggedIn] = useState(true);


  const [search, setSearch] = useState("")


  useEffect(()=>{
    const name = localStorage.getItem("patientName")
    setpatientname(name)
  },[])


  useEffect(() => {
    if (token) {
      setisLoggedIn(true)
    }
    else {
      setisLoggedIn(false)
    }
    const handleClickOutside = () => {
      setProfileOpen(false);
    };

    if (profileOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [profileOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="DocVerse"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-white text-2xl font-bold">
            Doc<span className="text-cyan-400">Verse</span>
          </h1>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-white font-medium ml-11">
          <li
            className="hover:text-cyan-400 cursor-pointer transition"
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className="hover:text-cyan-400 cursor-pointer transition"
            onClick={() => navigate("/doctors")}
          >
            Doctors
          </li>

          <li
            className="hover:text-cyan-400 cursor-pointer transition"
            onClick={() => navigate("/specialities")}
          >
            Specialities
          </li>

          <li
            className="hover:text-cyan-400 cursor-pointer transition"
            onClick={() => navigate("/about")}
          >
            About
          </li>

          <li
            className="hover:text-cyan-400 cursor-pointer transition"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        {!isLoggedIn ? (
          <div className="hidden lg:flex gap-3">
            <button
              className="text-white hover:text-cyan-400 transition mr-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 text-white transition"
              onClick={() => navigate("/register")}
            >
              Signup
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-5">

            <div className="flex items-center mr-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
              <FaSearch className="text-gray-300" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/doctors?search=${search}`);
                  }
                }}
                placeholder="Search doctors..."
                className="bg-transparent outline-none text-white ml-2 w-52 placeholder:text-gray-400"
              />
            </div>

            <div
              className="relative cursor-pointer mr-3"
              onClick={() => navigate("/notifications")}
            >
              <FaBell className="text-white text-xl" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </div>

            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full border-2 border-cyan-400 cursor-pointer"
              />

              {profileOpen && (
                <div className="absolute right-0 top-18 w-72 bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">

                  <div className="p-5 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt=""
                        className="w-12 h-12 rounded-full border border-cyan-400"
                      />

                      <div>
                        <h3 className="font-semibold text-white">
                          {patientname}
                        </h3>

                        <p className="text-sm text-gray-400">
                          Patient Account
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="py-2">
                    <li
                      onClick={() => navigate("/profile")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaUser />
                      My Profile
                    </li>

                    <li
                      onClick={() => navigate("/appointments")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaCalendarAlt />
                      My Appointments
                    </li>

                    <li
                      onClick={() => navigate("/favorites")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaHeart />
                      Favorite Doctors
                    </li>

                    <li
                      onClick={() => navigate("/notifications")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaBell />
                      Notifications
                    </li>

                    <li
                      onClick={() => navigate("/medical-records")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaFileMedical />
                      Medical Records
                    </li>

                    <li
                      onClick={() => navigate("/settings")}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-gray-800 cursor-pointer text-white transition"
                    >
                      <FaCog />
                      Settings
                    </li>

                    <li className="border-t border-gray-700 mt-2">
                      <button className="w-full flex items-center gap-3 px-5 py-3 text-red-400 hover:bg-red-500/10 transition" onClick={() => {
                        // setisLoggedIn(false)
                        localStorage.removeItem("token")
                        localStorage.removeItem("patientName")
                        navigate("/login")
                      }}>
                        <FaSignOutAlt />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md text-white px-6 py-5">
          <ul className="flex flex-col gap-5 font-medium">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/doctors")}>Doctors</li>
            <li onClick={() => navigate("/specialities")}>Specialities</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>

          {!isLoggedIn ? (
            <div className="flex flex-col gap-3 mt-5">
              <button className="border border-cyan-400 py-2 rounded-lg">
                Login
              </button>

              <button className="bg-cyan-500 py-2 rounded-lg">
                Signup
              </button>
            </div>
          ) : (
            <div className="mt-5">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-xl">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none ml-2 w-full"
                />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <FaBell
                  className="text-xl cursor-pointer"
                  onClick={() => navigate("/notifications")}
                />

                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt=""
                  className="w-10 h-10 rounded-full border border-cyan-400"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;