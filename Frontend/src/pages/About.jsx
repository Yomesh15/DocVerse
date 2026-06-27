import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen pt-33 bg-gray-900 text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            About <span className="text-cyan-400">DocVerse</span>
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                            DocVerse is a modern healthcare platform that helps patients
                            discover trusted doctors, schedule appointments instantly,
                            and manage healthcare interactions seamlessly.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
                                alt="Healthcare"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>

                        <div>
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

                                <div className="bg-gray-800 p-6 rounded-2xl">
                                    <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
                                    <p className="text-gray-400 mt-2">Verified Doctors</p>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-2xl">
                                    <h3 className="text-3xl font-bold text-cyan-400">10K+</h3>
                                    <p className="text-gray-400 mt-2">Appointments</p>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-2xl">
                                    <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                                    <p className="text-gray-400 mt-2">Support</p>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-2xl">
                                    <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                                    <p className="text-gray-400 mt-2">Secure Platform</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="w-232 relative top-[80px] h-px bg-gray-600 mx-auto"></div>
            </section>
            <Footer />
        </>
    );
};

export default About;