"use client";

import { ThemeProvider as Provider } from "next-themes";
import React from "react";

export function ThemeProvider({ children }: Children) {
  return <Provider attribute="class">{children}</Provider>;
}

export default ThemeProvider;
