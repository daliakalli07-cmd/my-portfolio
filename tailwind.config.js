/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        // Custom colors for your blue theme
        navy: "#0a1a3a",
        navyDark: "#0d1f47",
        navyDeep: "#102a60",
      },
    },
  },
darkMode: "class", // 👈 enable class-based dark mode toggle
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#00ffff",
          secondary: "#0a1a3a",
          accent: "#0d1f47",
          neutral: "#102a60",
          "base-100": "#ffffff",
          "base-content": "#0a1a3a",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#00ffff",
          secondary: "#0a1a3a",
          accent: "#0d1f47",
          neutral: "#102a60",
          "base-100": "#000000", // background
          "base-content": "#ffffff", // text color
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
