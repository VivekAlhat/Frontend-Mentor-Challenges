"use client";

import { createContext, useContext, useState } from "react";

const defaultValue = {
  region: "",
  setRegion: (region: string) => {},
};

const RegionContext = createContext<RegionContext>(defaultValue);

export const useRegion = () => {
  return useContext(RegionContext);
};

export default function RegionProvider({ children }: Children) {
  const [region, setRegion] = useState<string>("");

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}
