import countries from "@/data/countries.json";

const fetchCountries = (countryName: string, regionName: string): Country[] => {
  if (countryName !== "") {
    return countries.filter(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );
  } else if (regionName !== "") {
    return countries.filter(
      (country) => country.region.toLowerCase() === regionName.toLowerCase()
    );
  }
  return countries;
};

const fetchCountryByName = (
  countryName: string
): Country | null | undefined => {
  const results = countries.filter(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  if (results.length > 0) {
    return results.at(0);
  }

  return null;
};

const fetchBorderCountries = (country: Country) => {
  let borders: string[] = [];
  for (const c of countries) {
    if (country.borders?.includes(c.alpha3Code)) {
      borders.push(c.name);
    }
  }
  return borders;
};

export { fetchCountries, fetchCountryByName, fetchBorderCountries };
