import Back from "@/app/ui/back";
import Image from "next/image";
import { fetchCountryByName } from "@/app/lib/data";
import CountryDetails from "@/app/ui/country-details";
import CountryData from "../ui/country-data";

export default function Page({ params }: CountryPageProps) {
  const countryName = params.country;
  const country = fetchCountryByName(countryName);

  return (
    <div className="p-8 lg:p-12 space-y-12">
      <Back />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        <div className="relative aspect-video">
          <Image
            src={country!.flags["png"]}
            alt={country!.name}
            className="object-cover"
            sizes="100%"
            fill
            priority
          />
        </div>
        <CountryDetails country={country} />
      </div>
    </div>
  );
}
