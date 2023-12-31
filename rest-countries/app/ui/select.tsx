"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Select() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setShowDropdown(false);
  };

  return (
    <div className="relative select-none">
      <div
        className="bg-white drop-shadow-sm py-3 cursor-pointer px-6 rounded-md flex gap-4 items-center justify-between"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <p className="font-semibold">Filter by Region</p>
        <ChevronDown className="h-4 w-4" />
      </div>
      {showDropdown && (
        <div
          id="region"
          className="bg-white drop-shadow-sm rounded-md space-y-1 py-2 absolute w-full mt-1 z-50"
        >
          {regions.map((region) => (
            <p
              key={region}
              className="font-semibold cursor-pointer hover:bg-very-light-gray px-8 py-1"
              onClick={() => handleRegionSelect(region)}
            >
              {region}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
