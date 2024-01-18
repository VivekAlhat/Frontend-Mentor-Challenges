"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.length > 0) {
      params.set("country", searchTerm);
    } else {
      alert("missing country name");
    }
    setSearchTerm("");
    router.replace(`${pathname}/?${params.toString()}`);
  };

  return (
    <form
      className="flex items-center gap-4 md:min-w-[350px] lg:min-w-[500px] dark:bg-dark-mode-el p-4 rounded-md shadow-sm border border-slate-200 dark:border-none text-light-mode-input dark:text-white"
      onSubmit={handleFormSubmit}
    >
      <SearchIcon className="w-5 h-5" />
      <input
        placeholder="Search for a country..."
        className="bg-transparent w-full focus:outline-none text-black dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}
