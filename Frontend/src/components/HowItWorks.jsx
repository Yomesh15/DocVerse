import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    icon: "🧑‍⚕️",
    title: "Search Doctor / Speciality",
    desc: "Find the right doctor by speciality, rating, or availability in seconds.",
  },
  {
    icon: "📅",
    title: "Book Appointment",
    desc: "Choose a convenient date and time and book your appointment instantly.",
  },
  {
    icon: "📩",
    title: "Get Confirmation",
    desc: "Receive instant confirmation via email or SMS with all details.",
  },
  {
    icon: "🏥",
    title: "Visit / Consultation",
    desc: "Visit the clinic or join online consultation at your scheduled time.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="w-full pt-16 bg-gray-900 py-20 px-5">
      <div className="max-w-7xl mx-auto text-center">

        <span
          className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20"
          data-aos="fade-down"
        >
          Appointment Process
        </span>

        <h2
          className="mt-5 text-4xl md:text-5xl font-bold text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          How It Works
        </h2>

        <p
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Book your doctor appointment quickly and securely in just a few simple steps.
        </p>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl transition duration-300 hover:scale-110">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] sm:w-[500px] md:w-[700px] lg:w-[928px] h-px bg-gray-600 mx-auto relative top-[65px]"></div>
    </section>
  );
};

export default HowItWorks;