"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <button
      className="flex gap-3 px-6 py-2 drop-shadow-sm bg-white rounded-md text-very-dark-blue-text"
      onClick={() => router.back()}
    >
      <MoveLeft />
      <p>Back</p>
    </button>
  );
}
