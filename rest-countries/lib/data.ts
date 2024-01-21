import countries from "@/data/countries.json";

const fetchCountries = (
  countryName: string,
  regionName: string,
  page: number = 1
): Country[] => {
  const offset = 20;
  const skip = (page - 1) * offset;
  if (countryName !== "" && regionName !== "") {
    return countries
      .filter(
        (country) =>
          country.name.toLowerCase().includes(countryName.toLowerCase()) &&
          country.region.toLowerCase() === regionName.toLowerCase()
      )
      .slice(skip, page * offset);
  } else if (countryName !== "") {
    return countries
      .filter((country) =>
        country.name.toLowerCase().includes(countryName.toLowerCase())
      )
      .slice(skip, page * offset);
  } else if (regionName !== "") {
    return countries
      .filter(
        (country) => country.region.toLowerCase() === regionName.toLowerCase()
      )
      .slice(skip, page * offset);
  }
  return countries.slice(skip, page * offset);
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

const fetchCountriesCount = (countryName: string, regionName: string) => {
  if (countryName !== "" && regionName !== "") {
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(countryName.toLowerCase()) &&
        country.region.toLowerCase() === regionName.toLowerCase()
    ).length;
  } else if (countryName !== "") {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    ).length;
  } else if (regionName !== "") {
    return countries.filter(
      (country) => country.region.toLowerCase() === regionName.toLowerCase()
    ).length;
  }
  return countries.length;
};

export {
  fetchCountries,
  fetchCountryByName,
  fetchBorderCountries,
  fetchCountriesCount,
};
