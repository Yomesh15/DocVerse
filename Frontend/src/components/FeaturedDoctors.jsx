import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const FeaturedDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          "https://docverse-2.onrender.com/api/doctor/getalldoctors" || "http://localhost:2006/api/doctor/getalldoctors"
        );
        setDoctors(res.data.doctorss);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="bg-gray-900 -mb-[18px] pt-13 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Featured Doctors
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Connect with experienced and trusted healthcare professionals
            from various specialties.
          </p>

          <div className="w-32 h-[2px] bg-cyan-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h2 className="text-xl font-semibold text-white">
                  {doctor.name}
                </h2>


                <div className="mt-4 space-y-2 text-gray-300 text-sm">

                  <p className="flex items-center gap-2 relative left-[-1px]">
                    ⚕️ Speciality: {doctor.speciality}
                  </p>

                  <p className="relative left-[-2px]">
                    💼 Experience: {doctor.experience} Years
                  </p>

                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {doctor.city}
                  </p>

                  <p>
                    💰 Consultation Fee:{" "}
                    <span className="text-green-400 font-semibold">
                      ₹{doctor.fees}
                    </span>
                  </p>
                </div>

                <button
                  className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
                  onClick={() => {
                    navigate(`/doctor/${doctor._id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Book Appointment
                </button>

              </div>
            </div>
          ))}

        </div>

        <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[65px]"></div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;