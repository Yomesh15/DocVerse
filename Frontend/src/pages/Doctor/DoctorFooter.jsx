import React from "react";
import { FaUserMd, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-950 border-t border-white/10 text-white px-6 py-10 pt-22 ">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <FaUserMd className="text-cyan-400 text-2xl" />
            <h1 className="text-xl font-bold">
              Doctor<span className="text-cyan-400">Panel</span>
            </h1>
          </div>

          <p className="text-gray-400 mt-4 text-sm leading-6">
            Manage your patients, appointments, and medical practice efficiently with our modern doctor dashboard system.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li
              className="hover:text-cyan-400 cursor-pointer"
              onClick={() => navigate("/doctor-dashboard")}
            >
              Dashboard
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Appointments
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Patients
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Profile
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>

          <div className="space-y-3 text-gray-400 text-sm">

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              support@doctorpanel.com
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              India
            </p>

          </div>
        </div>

        {/* WORKING STATUS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">System Status</h2>

          <div className="space-y-3 text-sm text-gray-400">

            <p>
              🟢 All systems operational
            </p>

            <p>
              📅 Appointment system active
            </p>

            <p>
              🔒 Secure & encrypted data
            </p>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

        <p>
          © {new Date().getFullYear()} DoctorPanel. All rights reserved.
        </p>

        <p className="mt-2 md:mt-0">
          Built for modern healthcare management 🩺
        </p>

      </div>

    </footer>
  );
};

export default DoctorFooter;