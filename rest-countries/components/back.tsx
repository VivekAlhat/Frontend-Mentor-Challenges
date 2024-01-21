"use client";

import { useRegion } from "@/providers/region-provider";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Back() {
  const { setRegion } = useRegion();
  const router = useRouter();

  const redirectToHome = () => {
    setRegion("");
    router.push("/");
  };

  return (
    <div
      className="flex items-center cursor-pointer gap-3 w-fit py-2 px-6 dark:bg-dark-mode-el shadow-custom rounded-md hover:bg-slate-50 dark:hover:bg-slate-700"
      onClick={redirectToHome}
    >
      <ArrowLeft className="h-5 w-5" />
      <p>Back</p>
    </div>
  );
}
