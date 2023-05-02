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
        d1: "#1d1d1d",
        ouryellow: "#F6E657",
        // add new styles like this you know
      },
      dropShadow: {
        block: ["0px 0px 15px #f1f1f1"],
        jbtn: ["0px 0px 12px #6c6c6c"],
        btnsh: ["0px 0px 12px #C7C7C7"],
        ybtn: ["0px 0px 12px #F6E657"],
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      inset: {
        dd: ["0px 0px 12px #fff"],
      },
      scale: {
        mirror: "-1",
      },
      margin: {
        big: "540px",
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
