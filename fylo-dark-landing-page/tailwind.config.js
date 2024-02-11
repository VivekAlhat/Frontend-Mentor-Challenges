import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.serif],
        opensans: ["Open Sans", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "dark-blue-intro-signup": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-testimonial": "hsl(219, 30%, 18%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "light-red": "hsl(0, 100%, 63%)",
        cyang: "hsl(176, 68%, 64%)",
        blueg: "hsl(198, 60%, 50%)",
      },
      backgroundImage: {
        desktop: "url('/bg-curvy-desktop.svg')",
        mobile: "url('/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
