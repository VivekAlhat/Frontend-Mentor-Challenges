import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="grid place-content-center text-center gap-6 h-[90vh]">
      <p>This page does not exist</p>
      <Image
        src="/not-found.svg"
        alt="not found"
        width={0}
        height={0}
        className="w-full h-[400px] object-cover p-5"
        priority
      />
      <Link
        href="/"
        className="dark:bg-dark-mode-el px-6 py-2 rounded-md shadow-custom hover:bg-slate-50 dark:hover:bg-slate-700"
      >
        Go back
      </Link>
    </div>
  );
}
