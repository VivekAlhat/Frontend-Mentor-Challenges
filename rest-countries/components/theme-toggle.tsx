"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const iconClass = "cursor-pointer w-5 h-5";

  const handleThemeChange = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2" onClick={handleThemeChange}>
      {isDarkMode ? (
        <SunIcon className={iconClass} />
      ) : (
        <MoonIcon className={iconClass} />
      )}
    </div>
  );
}
