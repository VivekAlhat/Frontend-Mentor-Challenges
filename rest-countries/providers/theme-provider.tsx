"use client";

import { ThemeProvider as Provider } from "next-themes";
import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <Provider attribute="class">{children}</Provider>;
}

export default ThemeProvider;
