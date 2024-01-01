interface Country {
  name: string;
  topLevelDomain?: string[] | null;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes?: string[] | null;
  capital: string;
  altSpellings?: string[] | null;
  subregion: string;
  region: string;
  population: number;
  latlng?: number[] | null;
  demonym: string;
  area: number;
  gini: number;
  timezones?: string[] | null;
  borders?: string[] | null;
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies?: CurrenciesEntity[] | null;
  languages?: LanguagesEntity[] | null;
  translations: Translations;
  flag: string;
  regionalBlocs?: RegionalBlocsEntity[] | null;
  cioc: string;
  independent: boolean;
}
interface Flags {
  svg: string;
  png: string;
}
interface CurrenciesEntity {
  code: string;
  name: string;
  symbol: string;
}
interface LanguagesEntity {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}
interface RegionalBlocsEntity {
  acronym: string;
  name: string;
}

type CountryCardProps = {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
};

type CountryPageProps = {
  params: { country: string };
};

type CountryDataProps = {
  title: string;
  data: string | number | Element;
};
