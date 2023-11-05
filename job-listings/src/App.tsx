import Listing from "./components/Listing";
import listings from "../data/data.json";

function App() {
  return (
    <main>
      <div className="bg-mobile sm:bg-desktop h-[130px] bg-dark-cyan w-full"></div>
      <section className="flex flex-col px-6 py-12 sm:p-12 gap-10 bg-light-cyan-background">
        {listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </section>
    </main>
  );
}

export default App;
