import countries from "@/data.json";

export function fetchAllCountries(region: string = "") {
  return region === ""
    ? countries
    : countries.filter((c) => c.region === region);
}

export function fetchCountryByName(name: string) {
  const country = countries.find(
    (country) => country.name === decodeURIComponent(name)
  );
  return country as Country;
}

export function fetchBorderCountries(borders: string[]) {
  const borderCountries = borders.map((b) => {
    const country = countries.find((c) => c.alpha3Code === b);
    return country?.name;
  });
  return borderCountries;
}
