"use client";

import { Moon, Sun } from "lucide-react";

export default function Header() {
  const isDarkMode = false;

  return (
    <div className="flex items-center justify-between drop-shadow-sm px-8 py-4 lg:px-12 bg-white">
      <h1 className="lg:text-xl font-bold">Where in the world?</h1>
      <div className="flex items-center gap-2">
        {isDarkMode ? (
          <Sun
            className="cursor-pointer"
            onClick={() => console.log("light")}
          />
        ) : (
          <Moon
            className="cursor-pointer"
            onClick={() => console.log("dark")}
          />
        )}
        <p className="font-semibold text-sm">
          {isDarkMode ? "Light" : "Dark"} Mode
        </p>
      </div>
    </div>
  );
}
