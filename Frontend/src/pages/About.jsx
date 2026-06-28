import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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

            <section className="min-h-screen pt-33 bg-gray-900 text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            About <span className="text-cyan-400">DocVerse</span>
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                            DocVerse is a modern healthcare platform that helps patients
                            discover trusted doctors, schedule appointments instantly,
                            and manage healthcare interactions seamlessly.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mt-20 overflow-hidden">

                        <div data-aos="fade-right">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
                                alt="Healthcare"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>

                        <div data-aos="fade-left">
                            <h2 className="text-3xl font-bold mb-6">
                                Transforming Healthcare Experience
                            </h2>

                            <p className="text-gray-300 leading-8">
                                We connect patients with experienced healthcare
                                professionals through a simple and secure platform.
                                Whether you need a quick consultation or want to book an
                                appointment with a specialist, DocVerse makes healthcare
                                accessible and convenient.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-10">

                                <div
                                    className="bg-gray-800 p-6 rounded-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
                                    <p className="text-gray-400 mt-2">Verified Doctors</p>
                                </div>

                                <div
                                    className="bg-gray-800 p-6 rounded-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
                                    <p className="text-gray-400 mt-2">Appointments</p>
                                </div>

                                <div
                                    className="bg-gray-800 p-6 rounded-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                                    <p className="text-gray-400 mt-2">Support</p>
                                </div>

                                <div
                                    className="bg-gray-800 p-6 rounded-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                                    <p className="text-gray-400 mt-2">Secure Platform</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[48px]"></div>
            </section>

            <Footer />
        </>
    );
};

export default About;   