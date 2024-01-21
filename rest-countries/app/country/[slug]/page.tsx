import Back from "@/components/back";
import Span from "@/components/span";
import { fetchBorderCountries, fetchCountryByName } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CountryInfo from "@/components/country-info";
import Borders from "@/components/borders";

export function generateMetadata({ params }: CountryDetailsProps): Metadata {
  const country = params.slug;
  return {
    title: decodeURI(country),
  };
}

export default function Page({ params }: CountryDetailsProps) {
  const country = params.slug;

  const countryInfo = fetchCountryByName(decodeURI(country));

  if (!countryInfo) {
    notFound();
  }

  const borders = fetchBorderCountries(countryInfo);

  return (
    <section className="mt-2 md:mt-4 py-5 px-4 md:px-8 lg:px-16 space-y-4 md:space-y-12">
      <Back />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <Image
          src={countryInfo.flag}
          alt={countryInfo.name}
          width={0}
          height={0}
          className="w-full h-fit object-cover aspect-video"
          priority
        />
        <div className="flex flex-col justify-center gap-8">
          <h1 className="font-bold text-3xl">{countryInfo.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <CountryInfo prop="Native Name" value={countryInfo.nativeName} />
              <CountryInfo
                prop="Population"
                value={countryInfo.population.toLocaleString()}
              />
              <CountryInfo prop="Region" value={countryInfo.region} />
              <CountryInfo prop="Sub Region" value={countryInfo.subregion} />
              {countryInfo.capital && (
                <CountryInfo prop="Capital" value={countryInfo.capital} />
              )}
            </div>
            <div className="space-y-2">
              {countryInfo.topLevelDomain && (
                <CountryInfo
                  prop="Top Level Domain"
                  value={countryInfo.topLevelDomain.join(", ")}
                />
              )}
              {countryInfo.currencies && (
                <CountryInfo
                  prop="Currencies"
                  value={countryInfo.currencies?.map((c) => c.name).join(", ")}
                />
              )}
              {countryInfo.languages && (
                <CountryInfo
                  prop="Languages"
                  value={countryInfo.languages?.map((l) => l.name).join(", ")}
                />
              )}
            </div>
          </div>
          {borders.length > 0 && (
            <div className="space-y-3">
              <p>
                <Span>Border Countries:</Span>
              </p>
              <Borders borders={borders} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
