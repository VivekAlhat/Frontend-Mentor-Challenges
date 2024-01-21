import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 w-fit py-2 px-6 dark:bg-dark-mode-el shadow-custom rounded-md hover:bg-slate-50 dark:hover:bg-slate-700"
    >
      <ArrowLeft className="h-5 w-5" />
      <p>Back</p>
    </Link>
  );
}
