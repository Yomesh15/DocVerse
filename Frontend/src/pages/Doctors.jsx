import React, { useState, useEffect } from "react";
import { FaSearch, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


const Doctors = () => {
  const [doctors, setdoctors] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const urlSearch = queryParams.get("search") || "";

  const [search, setSearch] = useState(urlSearch);

  useEffect(() => {
    setSearch(urlSearch);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [urlSearch]);


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          `https://docverse-2.onrender.com/api/doctor/getalldoctors?search=${urlSearch}` || `http://localhost:2006/api/doctor/getalldoctors?search=${urlSearch}`
        );


        setdoctors(res.data.doctorss || [])
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, [urlSearch]);


  const filteredDoctors = (doctors || []).filter((doctor) => {
    const value = search.toLowerCase();

    return (
      (doctor.name || "").toLowerCase().includes(value) ||
      (doctor.speciality || doctor.specialization || "").toLowerCase().includes(value) ||
      (doctor.city || doctor.location || "").toLowerCase().includes(value)
    );
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Find Your <span className="text-cyan-400">Doctor</span>
            </h1>
            <p className="text-gray-400 mt-4">
              Search by name, speciality, or location
            </p>
          </div>

          <div className="max-w-xl mx-auto mt-10">
            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4">
              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search doctors..."
                value={search}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearch(value);
                  navigate(`/doctors?search=${value}`);
                }}
                className="bg-transparent outline-none ml-3 w-full text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6">
            {filteredDoctors.length} Doctors Found
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">

            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-xl font-semibold">
                      {doctor.name}
                    </h2>

                    {/* <p className="text-cyan-400 mt-1">
                      {doctor.specialization}
                    </p> */}

                    <div className="mt-4 space-y-2 text-gray-300 text-sm">

                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span>Speciality : {doctor.speciality}</span>
                      </div>

                      <p className="relative left-[-2px]">💼 Experience : {doctor.experience}</p>

                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{doctor.city}</span>
                      </div>

                      <p>
                        💰 Consultation Fee:{" "}
                        <span className="text-green-400 pl-1 font-semibold">
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
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-300">
                  No Doctors Found
                </h2>
                <p className="text-gray-500 mt-2">
                  Try different keywords like name, city, or speciality
                </p>
              </div>
            )}

          </div>
        </div>

        <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[66px]"></div>
      </section>

      <Footer />
    </>
  );
};

export default Doctors;