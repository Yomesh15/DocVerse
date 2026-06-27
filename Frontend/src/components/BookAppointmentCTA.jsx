import React from "react";
import { useNavigate } from "react-router-dom";

const BookAppointmentCTA = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-gray-900 py-14 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="text-center lg:text-left text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Find Your Doctor Today
          </h2>

          <p className="mt-4 text-sm md:text-base text-blue-100 max-w-xl">
            Book appointments with top-rated doctors in just a few clicks.
            Fast, easy, and secure healthcare access anytime you need it.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-white text-blue-600 cursor-pointer font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition" onClick={() => {
              navigate('/specialities')
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}>
              Book Appointment
            </button>

            <button className="border border-white text-white font-semibold cursor-pointer px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition" onClick={() => {
              navigate('/doctors')
              window.scrollTo({ top: 0, behavior: "smooth" })

            }}>
              View Doctors
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Doctor Appointment"
              className="w-64 md:w-80"
            />
          </div>
        </div>

      </div>
      <div className="w-232 relative top-[60px] h-px bg-gray-600 mx-auto"></div>
    </section>
  );
};

export default BookAppointmentCTA;