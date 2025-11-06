import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

import restaurantImg from "../components/restaurant.png";
import projectImg from "../components/projet.png";
import websiteImg from "../components/website.png";
import instruImg from "../components/instru.jpeg";

const projects = [
  {
    id: 1,
    name: "Restaurant Ordering System",
    href: "https://github.com/daliakalli07-cmd/Restaurant-Ordering-System.git",
    imageSrc: restaurantImg,
    used: "Python",
    description: "A modern restaurant ordering website with intuitive design.",
  },
  {
    id: 2,
    name: "Hybrid Solar–Grid Power Supply System",
    href: "https://github.com/daliakalli07-cmd/Hybrid-Solar-Grid-Power-Supply-System.git",
    imageSrc: projectImg,
    used: "C (Microcontroller)",
    description:
      "A smart system for efficient energy management using solar and grid power.",
  },
  {
    id: 3,
    name: "e-Commerce website",
    href: "https://github.com/daliakalli07-cmd/e-Commerce-website-computer-.git",
    imageSrc: websiteImg,
    used: "ReactJS, TailwindCSS",
    description:
      "A modern online shopping platform built with React and TailwindCSS.",
  },
  {
    id: 4,
    name: "Programmable-Gain Instrumentation Amplifier",
    href: "https://github.com/daliakalli07-cmd/Programmable-Gain-Instrumentation-Amplifier.git",
    imageSrc: instruImg,
    used: "C (Microcontroller)",
    description:
      "A precision instrumentation amplifier with programmable gain, designed for sensor signal conditioning and data acquisition applications.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects" className="bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7 text-blue-200">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Projects
        </p>

        {/* === Projects Grid === */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                glareEnable={true}
                glareColor="rgba(59,130,246,0.4)"
                glareMaxOpacity={0.5}
                scale={1.05}
                transitionSpeed={1000}
                className="group relative ring-2 ring-blue-400/20 bg-blue-900/40 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-[0_0_25px_4px_rgba(59,130,246,0.4)] transition-all duration-500 cursor-pointer flex flex-col h-[470px]"
                data-aos="zoom-in"
              >
                {/* Image section */}
                <div className="w-full h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text section */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-blue-300">
                    {project.used}
                  </p>
                </div>
              </Tilt>
            </a>
          ))}
        </div>

        {/* === View More Button === */}
        <div className="mt-16 flex justify-center">
          <button className="w-fit px-5 py-1.5 rounded-md bg-transparent border border-white text-white font-semibold text-sm transition-all duration-300 hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_1px_rgba(59,130,246,0.6)] active:scale-95">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
