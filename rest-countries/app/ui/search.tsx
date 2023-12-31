import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative flex lg:min-w-[400px] drop-shadow-sm">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-4 pl-12 text-sm outline-2 placeholder:text-darkgray"
        placeholder="Search for a country..."
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-darkgray" />
    </div>
  );
}
