import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: CountryDetailsProps): Metadata {
  const country = params.slug;
  return {
    title: decodeURI(country),
  };
}

export default function Page({ params }: CountryDetailsProps) {
  const country = params.slug;
  notFound();
}
