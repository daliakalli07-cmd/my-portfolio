import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-blue-900 via-blue-950 to-blue-950 py-24 sm:py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* === Title === */}
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-lg leading-7 text-blue-300">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-md">
            Contact Me
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Have a question or want to collaborate? Feel free to send me a message!
          </p>
        </div>

        {/* === Contact Form === */}
        <form
          action="https://formspree.io/f/xzzklgwr"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-blue-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-400/20 hover:shadow-[0_0_35px_4px_rgba(59,130,246,0.3)] transition-all duration-700"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-blue-200"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white ring-1 ring-inset ring-white/40 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-blue-200"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white ring-1 ring-inset ring-white/40 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 transition-all duration-300"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-blue-200"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white ring-1 ring-inset ring-white/40 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 transition-all duration-300"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-blue-200"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white ring-1 ring-inset ring-white/40 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 transition-all duration-300"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="w-full rounded-md border border-white py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:border-blue-500 hover:shadow-[0_0_20px_3px_rgba(59,130,246,0.6)] active:scale-95"
            >
              Send it
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
