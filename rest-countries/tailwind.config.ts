import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-mode-bg": "hsl(207, 26%, 17%)",
        "dark-mode-el": "hsl(209, 23%, 22%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
      },
      boxShadow: {
        custom: "0 8px 30px rgb(0,0,0,0.12)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
