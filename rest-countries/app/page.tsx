import DropDown from "@/components/dropdown";
import Search from "@/components/search";
import CountryCard from "@/components/country-card";
import { fetchCountries } from "@/lib/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Your passport to global knowledge",
};

export default function Page({ searchParams }: HomePageProps) {
  const country = searchParams?.country || "";
  const region = searchParams?.region || "";

  const countries: Country[] = fetchCountries(country, region);

  return (
    <section className="mt-2 md:mt-4 py-5 px-4 md:px-8 lg:px-16 space-y-12">
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
        <Search />
        <DropDown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </section>
  );
}
