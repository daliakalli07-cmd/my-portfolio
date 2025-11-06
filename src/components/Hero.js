import { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import pfp from "../avatar1.jpeg";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import GLOBE from "vanta/dist/vanta.globe.min";

const navigation = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact Me", id: "contact" },
];

export default function Hero() {
  const [animationType, setAnimationType] = useState("net");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (vantaEffect) vantaEffect.destroy();

    let effect;
    if (animationType === "net") {
      effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffff,
        backgroundColor: 0x0a1a3a,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    } else if (animationType === "globe") {
      effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x00ffff,
        color2: 0x0044ff,
        backgroundColor: 0x0a1a3a,
        size: 1.1,
      });
    }

    setVantaEffect(effect);
    return () => {
      if (effect) effect.destroy();
    };
  }, [animationType]);

  const toggleAnimation = () => {
    setAnimationType(animationType === "net" ? "globe" : "net");
  };

  return (
    <div id="hero" ref={vantaRef} className="relative overflow-hidden text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3a]/80 via-[#0d1f47]/85 to-[#102a60]/90 z-0"></div>

      {/* Navbar */}
      <header className="fixed bg-[#0a1a3a]/70 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)] border-b border-cyan-400/20 inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <p className="-m-1.5 p-1.5 font-semibold text-cyan-300 tracking-wider">
              Kalli Dalia Portfolio
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2.5 rounded-md hover:text-cyan-300 transition"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="text-sm font-semibold tracking-wider cursor-pointer relative text-gray-200 hover:text-cyan-300 transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-cyan-400 after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🌐 Toggle Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={toggleAnimation}
              className="flex items-center gap-2 px-3 py-2 border border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400/10 transition"
            >
              {animationType === "net" ? (
                <>
                  <GlobeAltIcon className="w-5 h-5 text-cyan-300" />
                  <span>3D Globe</span>
                </>
              ) : (
                <>
                  <SunIcon className="w-5 h-5 text-yellow-300" />
                  <span>Blue Mode</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="py-32 sm:py-40 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 items-center"
            data-aos="zoom-in"
          >
            {/* Photo */}
            <div className="flex justify-center items-center relative">
              <img
                src={pfp}
                alt="Dalia Kalli"
                className="w-72 rounded-full ring-4 ring-cyan-400/50 shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-all duration-500 relative z-10"
              />
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <p className="text-2xl tracking-tight text-gray-200 mb-2">
                Hello, I'm
              </p>
              <h1 className="text-5xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                Kalli Dalia
              </h1>
              <p className="mt-6 text-2xl leading-8 text-gray-300">
                <TypeAnimation
                  sequence={[
                    "I'm a Frontend Developer",
                    2000,
                    "An Electronics Student",
                    2000,
                    "A Curious Mind in Tech",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <p className="mt-8 text-white-400 italic">
                “Strive not to be a success, but rather to be of value.” — Albert Einstein
              </p>

              {/* 👇 New Buttons */}
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a
                  href="/Kalli_Dalia_CV.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition"
                >
                  View CV
                </a>
                <a
                  href="https://github.com/daliakalli07-cmd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
