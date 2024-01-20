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

export { fetchCountries };
