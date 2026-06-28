import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    const navigate = useNavigate();

    const [form, setform] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            offset: 120,
        });
    }, []);

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "https://docverse-2.onrender.com/api/contact",
                form
            );

            toast.success("We Contact You Soon");

            setform({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
            toast.error("Failed to Save Contact");
        }
    };

    return (
        <>
            <Navbar />

            <section className="min-h-screen pt-33 bg-gray-900 text-white py-24 px-6 overflow-x-hidden">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Contact <span className="text-cyan-400">DocVerse</span>
                        </h1>

                        <p className="text-gray-400 mt-5">
                            We'd love to hear from you. Reach out anytime.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mt-20">

                        <div
                            className="bg-gray-800 p-8 rounded-3xl"
                            data-aos="fade-right"
                        >

                            <h2
                                className="text-2xl font-semibold mb-6"
                                data-aos="fade-up"
                            >
                                Send us a Message
                            </h2>

                            <form
                                className="space-y-5"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                onSubmit={handlesubmit}
                            >

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    onChange={handlechange}
                                    value={form.name}
                                    className="w-full bg-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    onChange={handlechange}
                                    value={form.email}
                                    className="w-full bg-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    onChange={handlechange}
                                    value={form.subject}
                                    className="w-full bg-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    name="message"
                                    onChange={handlechange}
                                    value={form.message}
                                    className="w-full bg-gray-700 p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                        <div className="flex flex-col justify-center">

                            <div
                                className="bg-gray-800 p-8 rounded-3xl mb-6"
                                data-aos="fade-left"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    📧 Email
                                </h3>
                                <p className="text-gray-400">
                                    support@docverse.com
                                </p>
                            </div>

                            <div
                                className="bg-gray-800 p-8 rounded-3xl mb-6"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    📞 Phone
                                </h3>
                                <p className="text-gray-400">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div
                                className="bg-gray-800 p-8 rounded-3xl"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    📍 Address
                                </h3>
                                <p className="text-gray-400">
                                    Jaipur, Rajasthan, India
                                </p>
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

export default Contact;