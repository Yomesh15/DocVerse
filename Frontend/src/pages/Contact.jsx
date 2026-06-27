import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate()
    const [form, setform] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:2006/api/contact", form);

            toast.success("We Contact You Soon");

            setform({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

            navigate("/");
            window.scrollTo({top:0, behavior:"smooth"})
        } catch (error) {
            toast.error("Failed to Save Contact");
        }
    };

    return (
        <>
            <Navbar />
            <section className="min-h-screen pt-33 bg-gray-900 text-white py-24 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Contact <span className="text-cyan-400">DocVerse</span>
                        </h1>

                        <p className="text-gray-400 mt-5">
                            We'd love to hear from you. Reach out anytime.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mt-20">

                        <div className="bg-gray-800 p-8 rounded-3xl">

                            <h2 className="text-2xl font-semibold mb-6">
                                Send us a Message
                            </h2>

                            <form className="space-y-5">

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
                                    onClick={
                                        handlesubmit
                                    }

                                    className="w-full cursor-pointer bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>

                        <div className="flex flex-col justify-center">

                            <div className="bg-gray-800 p-8 rounded-3xl mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    📧 Email
                                </h3>
                                <p className="text-gray-400">
                                    support@docverse.com
                                </p>
                            </div>

                            <div className="bg-gray-800 p-8 rounded-3xl mb-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    📞 Phone
                                </h3>
                                <p className="text-gray-400">
                                    +91 98765 43210
                                </p>
                            </div>

                            <div className="bg-gray-800 p-8 rounded-3xl">
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
                <div className="w-232 relative top-[80px] h-px bg-gray-600 mx-auto"></div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;