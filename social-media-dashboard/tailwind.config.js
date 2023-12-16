import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-from": "hsl(37, 97%, 70%)",
        "instagram-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-toggle-from": "hsl(210, 78%, 56%)",
        "dark-toggle-to": "hsl(146, 68%, 55%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        "very-dark-blue-bg-d": "hsl(230, 17%, 14%)",
        "very-dark-blue-bg-top-d": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue-card-bg-d": "hsl(228, 28%, 20%)",
        "desaturated-blue-text-d": "hsl(228, 34%, 66%)",
        "c-white": "hsl(0, 0%, 100%)",
        "very-pale-blue-bg-top-l": "hsl(225, 100%, 98%)",
        "light-grayish-blue-bg-card-l": "hsl(227, 47%, 96%)",
        "dark-grayish-blue-text-l": "hsl(228, 12%, 44%)",
        "very-dark-blue-text-l": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "card-heading": "14px",
      },
    },
  },
  plugins: [],
};
