import DropDown from "@/components/dropdown";
import Search from "@/components/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Your passport to global knowledge",
};

export default function Home({ searchParams }: HomePageProps) {
  const country = searchParams?.country || "";
  const region = searchParams?.region || "";

  console.log(country, region);

  return (
    <section className="mt-2 md:mt-4 py-5 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
        <Search />
        <DropDown />
      </div>
    </section>
  );
}
