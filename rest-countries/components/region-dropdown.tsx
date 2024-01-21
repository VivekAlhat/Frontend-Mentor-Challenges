"use client";

import regions from "@/data/regions.json";
import { useRegion } from "@/providers/region-provider";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegionDropDown() {
  const { region, setRegion } = useRegion();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();
  const urlParams = useSearchParams();

  const handleSetRegion = (region: string) => {
    setRegion(region);
    const params = new URLSearchParams(urlParams);
    params.set("region", region);
    router.replace(`${pathname}/?${params.toString()}`);
    setIsSelected(false);
  };

  const handleClearFilter = () => {
    setRegion("");
    router.push("/");
  };

  return (
    <div className="flex md:flex-row flex-col-reverse items-center gap-3">
      {region && (
        <button onClick={handleClearFilter} className="w-full hover:underline">
          Clear Filter
        </button>
      )}
      <div className="relative font-semibold shadow-custom w-full">
        <button
          id="region"
          className="dark:bg-dark-mode-el w-full md:w-[200px] p-4 rounded-md shadow-sm border border-slate-200 dark:border-none dark:text-white focus:outline-slate-300 flex items-center justify-between"
          onClick={() => setIsSelected((prev) => !prev)}
        >
          {region === "" ? "Filter by Region" : region}
          <ChevronDown className="w-5 h-5" />
        </button>
        {isSelected && (
          <ul className="shadow-custom dark:bg-dark-mode-el bg-white py-2 absolute rounded-md border border-slate-200 dark:border-none dark:text-white mt-1 w-full">
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
    </div>
  );
}
