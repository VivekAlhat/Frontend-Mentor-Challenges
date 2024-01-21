"use client";

import ThemeToggle from "./theme-toggle";

import { useRegion } from "@/providers/region-provider";
import { useRouter } from "next/navigation";

export default function Header() {
  const { setRegion } = useRegion();
  const router = useRouter();

  const redirectToHome = () => {
    setRegion("");
    router.push("/");
  };

  return (
    <nav className="flex justify-between gap-4 dark:bg-dark-mode-el py-5 px-4 md:px-8 lg:px-16 shadow-sm">
      <h1 className="text-lg font-bold cursor-pointer" onClick={redirectToHome}>
        Where in the world?
      </h1>
      <ThemeToggle />
    </nav>
  );
}
