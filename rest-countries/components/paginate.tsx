"use client";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Paginate({ isLastPage }: { isLastPage: boolean }) {
  const router = useRouter();
  const urlParams = useSearchParams();
  let currPage = urlParams.get("page") || "1";

  const handlePreviousPage = () => {
    const params = new URLSearchParams(urlParams);
    const page = currPage === "1" ? "1" : (parseInt(currPage) - 1).toString();
    params.set("page", page);
    router.replace(`/?${params.toString()}`);
  };

  const handleNextPage = () => {
    const params = new URLSearchParams(urlParams);
    const page = (parseInt(currPage) + 1).toString();
    params.set("page", page);
    router.replace(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <ArrowLeftCircle
        className={`h-8 w-8 cursor-pointer ${
          currPage === "1" &&
          "pointer-events-none text-gray-400 dark:text-gray-600"
        }`}
        onClick={handlePreviousPage}
      />
      <ArrowRightCircle
        className={`h-8 w-8 cursor-pointer ${
          isLastPage && "pointer-events-none text-gray-400 dark:text-gray-600"
        }`}
        onClick={handleNextPage}
      />
    </div>
  );
}
