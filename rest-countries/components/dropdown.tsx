"use client";

import regions from "@/data/regions.json";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function DropDown() {
  const [region, setRegion] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleSetRegion = (region: string) => {
    setRegion(region);
    const params = new URLSearchParams();
    params.set("region", region);
    router.replace(`${pathname}/?${params.toString()}`);
    setIsSelected(false);
  };

  return (
    <div className="relative font-semibold">
      <button
        id="region"
        className="dark:bg-dark-mode-el w-full md:w-[200px] p-4 rounded-md shadow-sm border border-slate-200 dark:border-none dark:text-white focus:outline-slate-300 flex items-center justify-between"
        onClick={() => setIsSelected((prev) => !prev)}
      >
        {region === "" ? "Filter by Region" : region}
        <ChevronDown className="w-5 h-5" />
      </button>
      {isSelected && (
        <ul className="dark:bg-dark-mode-el py-2 absolute rounded-md shadow-sm border border-slate-200 dark:border-none dark:text-white mt-1 w-full">
          {regions.map((region) => (
            <li
              key={region.id}
              className="px-8 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
              onClick={() => handleSetRegion(region.name)}
            >
              {region.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
