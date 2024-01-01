"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CountryData from "./country-data";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardProps) {
  const router = useRouter();

  const visitCountry = () => {
    router.push(`/${name}`);
  };

  return (
    <div
      className="group drop-shadow-sm bg-white rounded-md cursor-pointer"
      onClick={visitCountry}
    >
      <div className="relative aspect-video">
        <Image
          src={flag}
          alt={name}
          className="rounded-t-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>
      <div className="p-4 space-y-2">
        <h1 className="font-bold text-xl mb-6">{name}</h1>
        <CountryData title="Population" data={population} />
        <CountryData title="Region" data={region} />
        {capital && <CountryData title="Capital" data={capital} />}
      </div>
    </div>
  );
}
