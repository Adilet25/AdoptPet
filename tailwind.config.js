/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1240px",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        black2: "#111",
        // add new styles like this you know
      },
      width: {},
      height: {},
      outlineWidth: {},
      borderRadius: {},
      fontFamily: {},
      backgroundColor: {},
      transitionDelay: {},
      spacing: {},
      keyframes: {},
    },
  },
  plugins: [],
};
