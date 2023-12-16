import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
