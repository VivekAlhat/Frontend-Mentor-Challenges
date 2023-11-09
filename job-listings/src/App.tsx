import Listing from "./components/Listing";
import listings from "../data/data.json";
import useFilter from "./hooks/useFilter";
import FilterTab from "./components/FilterTab";

function App() {
  const { filter } = useFilter();

  const showListings = (listing: Listing) => {
    const possibleFilters = [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools,
    ];

    let show: boolean = true;

    filter.forEach((item) => {
      if (!possibleFilters.includes(item)) {
        show = false;
      }
    });

    return show;
  };

  return (
    <main>
      <div className="bg-mobile sm:bg-desktop h-[130px] bg-dark-cyan w-full"></div>
      <section className="flex flex-col px-6 py-12 sm:p-12 h-screen bg-light-cyan-background">
        {filter.length > 0 && <FilterTab />}
        <div className="space-y-6">
          {listings.map(
            (listing) =>
              showListings(listing) && (
                <Listing key={listing.id} listing={listing} />
              )
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
