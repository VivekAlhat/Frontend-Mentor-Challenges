import { fetchBorderCountries } from "@/app/lib/data";
import CountryData from "./country-data";

export default function CountryDetails({ country }: { country: Country }) {
  const borderCountries = fetchBorderCountries(country.borders as string[]);

  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-center">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl mb-8">{country!.name}</h1>
          <CountryData title="Native Name" data={country!.nativeName} />
          <CountryData title="Population" data={country!.population} />
          <CountryData title="Region" data={country!.region} />
          <CountryData title="SubRegion" data={country!.subregion} />
          {country?.capital && (
            <CountryData title="Capital" data={country.capital} />
          )}
        </div>
        <div className="space-y-2">
          {country?.topLevelDomain && (
            <CountryData
              title="Top Level Domain"
              data={country.topLevelDomain.join(", ")}
            />
          )}
          {country?.currencies && (
            <CountryData
              title="Currencies"
              data={country.currencies.map((c) => c.name).join(", ")}
            />
          )}
          {country?.languages && (
            <CountryData
              title="Languages"
              data={country.languages.map((l) => l.name).join(", ")}
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-semibold">Border Countries:</p>
        <Border countries={borderCountries as string[]} />
      </div>
    </div>
  );
}

const Border = ({ countries }: { countries: string[] }) => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {countries?.map((name) => (
        <div
          key={name}
          className="px-3 py-1 bg-white drop-shadow-sm cursor-pointer"
        >
          <p className="capitalize">{name}</p>
        </div>
      ))}
    </div>
  );
};
