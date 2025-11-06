import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const features = [
  { name: "Age:", description: "21 years old", icon: CalendarIcon },
  { name: "Email:", description: "daliakalli07@gmail.com", icon: AtSymbolIcon },
  { name: "Location:", description: "Algeria, Earth", icon: MapPinIcon },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      id="about"
      className="
        relative py-24 
        text-white overflow-hidden transition-all duration-700
        bg-gradient-to-b from-[#0a1a3a] via-[#0d1f47] to-[#102a60]
        dark:bg-black dark:bg-none
      "
    >
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.25)_0%,transparent_70%)] dark:hidden"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-3 tracking-widest text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto dark:text-gray-200">
            Get to know more about who I am, what I do, and what drives my passion for technology.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="
              bg-[#0f214d]/70 dark:bg-[#111]/80
              border border-cyan-400/40 backdrop-blur-lg rounded-2xl p-10
              shadow-[0_0_25px_rgba(0,255,255,0.25)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
              transition-all duration-500
            "
          >
            <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-100">
              Hi there! I’m <span className="text-cyan-400 font-semibold">Dalia Kalli</span>, a
              21-year-old Master’s student in Instrumentation and Electronics, passionate about
              <span className="text-cyan-300"> robotics, automation, and digital design</span>.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-200 dark:text-gray-100">
              I’ve completed several internships and training programs — including one in{" "}
              <span className="text-cyan-300">web development</span> — where I learned to build
              responsive and user-friendly interfaces.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            data-aos="fade-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <img
              src="/mypick.jpg"
              alt="Dalia"
              className="rounded-2xl w-[26rem] lg:w-[32rem] ring-2 ring-cyan-400/50 shadow-[0_0_35px_rgba(0,255,255,0.3)] hover:shadow-[0_0_45px_rgba(0,255,255,0.6)] transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Experience + Education */}
        <div className="mt-20 grid sm:grid-cols-2 gap-10">
          <motion.div
            data-aos="zoom-in"
            whileHover={{ scale: 1.03 }}
            className="
              bg-[#0f214d]/70 dark:bg-[#111]/80
              border border-cyan-400/40 rounded-2xl p-8
              shadow-[0_0_25px_rgba(0,255,255,0.2)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
              transition-all duration-500
            "
          >
            <div className="flex items-center justify-center mb-4">
              <BriefcaseIcon className="h-6 w-6 text-cyan-400 mr-2" />
              <h3 className="text-2xl font-semibold text-cyan-300">Experience</h3>
            </div>
              <ul className="text-gray-200 text-left space-y-3">
              <li>
                <span className="font-semibold text-cyan-400">
                  Internship — General Electricity 📍
                </span>{" "}
                Club des Pins, Algiers — 1 month. Worked on electrical installations and
                maintenance, improving my technical and teamwork skills.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Final Year Bachelor’s Project:
                </span>{" "}
                Design and implementation of a hybrid power supply system using solar and AC mains.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">Shopify Clone Website:</span>{" "}
                Developed a responsive e-commerce web app with authentication and product
                management.
              </li>
            </ul>
          </motion.div>

          <motion.div
            data-aos="zoom-in"
            whileHover={{ scale: 1.03 }}
            className="
              bg-[#0f214d]/70 dark:bg-[#111]/80
              border border-cyan-400/40 rounded-2xl p-8
              shadow-[0_0_25px_rgba(0,255,255,0.2)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
              transition-all duration-500
            "
          >
            <div className="flex items-center justify-center mb-4">
              <AcademicCapIcon className="h-6 w-6 text-cyan-400 mr-2" />
              <h3 className="text-2xl font-semibold text-cyan-300">Education</h3>
            </div>
            <ul className="text-gray-200 text-left space-y-3">
              <li>
                <span className="font-semibold text-cyan-400">Baccalaureate — 2021:</span>{" "}
                Specialization in Electrical Engineering, achieved with 15/20.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">Web Development Certificate — 2023:</span>{" "}
                Completed a training program in HTML, CSS, JS, and React.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Bachelor’s in Electronics — USTHB (2021–2024):
                </span>{" "}
                Graduated with a strong background in electronics.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Master’s in Instrumentation — USTHB (2024–Present):
                </span>{" "}
                Currently pursuing advanced studies in Instrumentation.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Info Boxes */}
        <dl className="mt-16 text-base leading-7 lg:max-w-none" data-aos="fade-up">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="
                  relative bg-[#0f214d]/70 dark:bg-[#111]/80
                  border border-cyan-400/40 rounded-xl px-6 py-4
                  shadow-[0_0_20px_rgba(0,255,255,0.25)]
                  hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
                  transition-all duration-300
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <feature.icon className="h-5 w-5 text-cyan-400" />
                  <dt className="font-semibold text-cyan-300">{feature.name}</dt>
                  <dd className="text-gray-200 dark:text-gray-100">{feature.description}</dd>
                </div>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
}
