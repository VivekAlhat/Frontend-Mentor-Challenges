import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Articles from "../organisms/Articles";

const Home = () => {
  return (
    <div className="container mx-auto p-5 sm:p-10">
      <Header />
      <Hero />
      <Articles />
    </div>
  );
};

export default Home;
