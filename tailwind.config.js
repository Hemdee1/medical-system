/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FB783",
        secondary: "#034561",
        dashboardGray: "#f6f6f6",
      },
      fontFamily: {
        Caudex: "Caudex, serif",
        OpenSans: "Open Sans, san-serif",
      },
      width: {
        fullscreen: "1440px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
