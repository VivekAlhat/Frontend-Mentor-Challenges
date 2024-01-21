import Image from "next/image";
import Span from "./span";
import Link from "next/link";

export default function CountryCard({ country }: CountryCardProps) {
  const { flag, name, population, region, capital } = country;

  return (
    <Link
      href={`/country/${name}`}
      className="shadow-custom border dark:border-none border-slate-100 flex flex-col"
    >
      <Image
        src={flag}
        alt={name}
        width={0}
        height={0}
        className="w-full h-[200px] object-cover rounded-t-md"
        priority
      />
      <div className="space-y-4 p-4 dark:bg-dark-mode-el rounded-b-md flex-grow">
        <h1 className="font-bold text-xl">{name}</h1>
        <div className="space-y-1 text-light-mode-text dark:text-white">
          <p>
            <Span>Population:</Span>&nbsp;{population.toLocaleString()}
          </p>
          <p>
            <Span>Region:</Span>&nbsp;{region}
          </p>
          {capital && capital?.length > 0 && (
            <p>
              <Span>Capital:</Span>&nbsp;{capital}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
