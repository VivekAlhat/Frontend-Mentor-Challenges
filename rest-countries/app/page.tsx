import Countries from "@/components/countries";
import RegionDropDown from "@/components/region-dropdown";
import Paginate from "@/components/paginate";
import Search from "@/components/search";
import { fetchCountries, fetchCountriesCount } from "@/lib/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Your passport to global knowledge",
};

export default function Page({ searchParams }: HomePageProps) {
  const country = searchParams?.country || "";
  const region = searchParams?.region || "";
  const page = searchParams?.page || 1;

  const countries: Country[] = fetchCountries(country, region, page);
  const total: number = fetchCountriesCount(country, region);
  const isLastPage = Math.round(total / 20) <= page;

  return (
    <section className="mt-2 md:mt-4 py-5 px-4 md:px-8 lg:px-16 space-y-12">
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
        <Search />
        <RegionDropDown />
      </div>
      <Countries countries={countries} />
      <Paginate isLastPage={isLastPage} />
    </section>
  );
}
