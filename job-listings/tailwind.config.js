import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(180, 29%, 50%)",
        "light-cyan-background": "hsl(180, 52%, 96%)",
        "light-cyan-filter": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        desktop: "url('./images/bg-header-desktop.svg')",
        mobile: "url('./images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
