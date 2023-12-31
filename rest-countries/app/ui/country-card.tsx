import Image from "next/image";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCardProps) {
  return (
    <div className="group drop-shadow-sm bg-white rounded-md">
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
        <p>
          <span className="font-semibold">Population:</span>&nbsp;
          {population}
        </p>
        <p>
          <span className="font-semibold">Region:</span>&nbsp;
          {region}
        </p>
        {capital?.length > 0 && (
          <p>
            <span className="font-semibold">Capital:</span>&nbsp;
            {capital.at(0)}
          </p>
        )}
      </div>
    </div>
  );
}
