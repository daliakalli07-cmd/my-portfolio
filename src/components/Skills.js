import { useEffect } from "react";
import { motion } from "framer-motion";
import { CpuChipIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = {
  frontend: [
    { name: "HTML / CSS", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 80 },
    { name: "Tailwind / UI Design", value: 60 },
    { name: "Python", value: 75 },
  ],
  engineering: [
    { name: "MATLAB / Simulink", value: 75 },
    { name: "Proteus", value: 85 },
    { name: "TIA Portal / PLC", value: 60 },
    { name: "Arduino", value: 80 },
    { name: "C / C++", value: 50 },
  ],
  languages: [
    { name: "Arabic", value: 100 },
    { name: "French", value: 75 },
    { name: "English", value: 90 },
    { name: "Spanish", value: 50 },
    { name: "russian", value: 10 },
  ],
};

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      id="skills"
      className="relative py-24 text-white overflow-hidden bg-gradient-to-b from-[#001F3F] via-[#003B73] to-[#0066CC]"
    >
      {/* Subtle tech glow */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.3)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold mb-12 tracking-widest text-cyan-200 drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
          ⚙️ My Technical Arsenal
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([title, items], index) => (
            <motion.div
              key={title}
              data-aos="fade-up"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-xl border border-blue-300/50 rounded-2xl p-8 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]"
            >
              <div className="flex items-center justify-center mb-6">
                <CpuChipIcon className="h-8 w-8 text-blue-300 animate-pulse mr-3" />
                <h3 className="text-2xl font-bold uppercase tracking-wider text-blue-200">
                  {title}
                </h3>
              </div>

              {items.map((skill) => (
                <div key={skill.name} className="mb-5 text-left">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-100">
                      {skill.name}
                    </span>
                    <span className="text-sm text-blue-200">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full bg-blue-950/40 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

