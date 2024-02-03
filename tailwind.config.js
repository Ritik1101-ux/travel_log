/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {

      colors: {
        pink: "#F85E9F",
        yellow: "#FACD49",
        black: "#1e1e1e",
        purple: "#5D50C6",
        primary: "#ECEEFF",
        "light-gray":"#E5E7EB",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        '1xl':'5px 0px 5px rgba(0, 0, 0, 0.1)'
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      
    },
    
  },
  plugins: [],
};
