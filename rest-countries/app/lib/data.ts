export async function fetchAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();
  return countries;
}
