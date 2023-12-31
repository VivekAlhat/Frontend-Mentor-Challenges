interface Country {
  name: Record<string, string>;
  region: string;
  population: number;
  capital: string[];
  flags: Record<string, string>;
}

type CountryCardProps = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
};
