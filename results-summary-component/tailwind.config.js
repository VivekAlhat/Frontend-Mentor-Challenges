const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavendar": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "light-red-bg": "hsla(0, 100%, 67%, 0.1)",
        "orangey-yellow-bg": "hsla(39, 100%, 56%, 0.1)",
        "green-teal-bg": "hsla(166, 100%, 37%, 0.1)",
        "cobalt-blue-bg": "hsla(234, 85%, 45%, 0.1)",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
