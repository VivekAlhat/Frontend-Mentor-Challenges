const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        cream: "hsl(30, 38%, 92%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        fraunces: ["Fraunces", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        desktop: "url('../images/image-product-desktop.jpg')",
        mobile: "url('../images/image-product-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
