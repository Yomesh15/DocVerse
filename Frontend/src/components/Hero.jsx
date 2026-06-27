import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="min-h-screen pt-6 bg-gray-900">
      <div className="h-full min-h-screen flex  items-center justify-center px-4">
        <div className="text-center max-w-4xl">

          <div className="inline-block border border-gray-700 rounded-full px-5 py-2 text-gray-300 mb-6">
            Trusted Healthcare Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find & Book
            <br />
            Trusted Doctors
          </h1>

          <p className="text-gray-300 text-base md:text-lg mt-6 max-w-2xl mx-auto">
            Connect with experienced healthcare professionals,
            schedule appointments instantly, and manage your
            medical records securely.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold transition" onClick={()=> navigate('/specialities')}>
              Book Appointment
            </button>

            <button className="border border-white cursor-pointer text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition" onClick={()=> navigate('/doctors')}>
              Find Doctors
            </button>
          </div>


          <div className="mt-0 relative top-[103px] left-[10px] flex justify-center">
            <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 animate-bounce" onClick={()=> window.scrollTo({top:1570, behavior:"smooth"})}>
              <span className="font-medium tracking-wide">
                Explore More
              </span>

              <div className="bg-cyan-500 p-2 rounded-full">
                <FaArrowDown className="text-white text-sm" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-232 relative top-[25px] h-px bg-gray-600 mx-auto"></div>
    </section>
  );
};

export default Hero;