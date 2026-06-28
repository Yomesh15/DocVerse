import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaHeartbeat,
    FaBrain,
    FaTooth,
    FaEye,
    FaChild,
    FaBone,
} from "react-icons/fa";

const specialties = [
    {
        icon: <FaHeartbeat />,
        title: "Cardiology",
        desc: "Expert heart care and advanced cardiac treatments.",
    },
    {
        icon: <FaBrain />,
        title: "Neurology",
        desc: "Comprehensive care for brain and nervous system disorders.",
    },
    {
        icon: <FaTooth />,
        title: "Dentistry",
        desc: "Complete dental solutions for a healthy smile.",
    },
    {
        icon: <FaEye />,
        title: "Ophthalmology",
        desc: "Advanced eye care and vision treatments.",
    },
    {
        icon: <FaChild />,
        title: "Pediatrics",
        desc: "Specialized healthcare for infants and children.",
    },
    {
        icon: <FaBone />,
        title: "Orthopedics",
        desc: "Expert treatment for bones, joints, and muscles.",
    },
];

const Specialities = () => {

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            offset: 120,
        });
    }, []);

    return (
        <>
            <Navbar />

            <section className="bg-gray-900 pt-17 text-gray-300 py-20 px-6">
                <div className="max-w-7xl mx-auto pt-10">

                    <div className="text-center mb-14" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Our Specialities
                        </h2>
                        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
                            Connect with highly qualified specialists and receive quality
                            healthcare services tailored to your needs.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {specialties.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center text-white transition-all duration-300 hover:-translate-y-3 hover:bg-white/20 cursor-pointer"
                            >
                                <div className="text-5xl mb-5 flex justify-center text-cyan-300">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[67px]"></div>
            </section>

            <Footer />
        </>
    )
}

export default Specialities