import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  const scroller = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-14 pb-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Docverse</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Book doctor appointments easily and securely.
            Connecting patients with trusted healthcare professionals anytime, anywhere.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer" onClick={() => {
              navigate("/")
              scroller()
            }}>Home</li>
            <li className="hover:text-white cursor-pointer" onClick={() => {
              navigate("/doctors")
              scroller()
            }}>Doctors</li>
            <li className="hover:text-white cursor-pointer" onClick={() => {
              navigate("/specialities")
              scroller()
            }}>Specialities</li>
            <li className="hover:text-white cursor-pointer" onClick={() => {
              navigate("/doctors")
              scroller()
            }}>Book Appointment</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer" onClick={() => {
              navigate("/contact")
              scroller()
            }}>Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@docverse.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Docverse. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;