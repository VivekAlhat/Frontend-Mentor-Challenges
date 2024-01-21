import CountryCard from "./country-card";
import Paginate from "./paginate";

export default function Countries({ countries }: CountriesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
}
