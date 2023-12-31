import Search from "@/app/ui/search";
import CountryCard from "@/app/ui/country-card";
import Select from "@/app/ui/select";

import { fetchAllCountries } from "@/app/lib/data";

export default async function Home() {
  const countries = await fetchAllCountries();

  return (
    <section className="p-8 lg:p-12 space-y-8">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <Search />
        <Select />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-very-dark-blue-text">
        {countries.map((country) => (
          <CountryCard
            key={country.name["common"]}
            name={country.name["common"]}
            region={country.region}
            population={country.population}
            capital={country.capital}
            flag={country.flags["png"]}
          />
        ))}
      </div>
    </section>
  );
}
