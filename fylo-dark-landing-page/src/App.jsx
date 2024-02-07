import Header from "./components/Header";

function App() {
  return (
    <main className="text-white">
      <Header />
      <section className="bg-dark-blue-intro-signup px-6 md:px-8 lg:px-12 pt-12 pb-28 flex flex-col items-center justify-center gap-8">
        <img
          src="/illustration-intro.png"
          alt="Illustration Intro"
          className="h-fit w-[500px]"
        />
        <div className="font-opensans text-center space-y-6 max-w-xl">
          <h1 className="text-3xl font-bold leading-[3rem] lg:leading-[3rem] md:text-3xl">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-lg text-white/80 leading-[2rem]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="font-semibold border-none outline-none py-3 w-[250px] bg-gradient-to-r from-cyang to-blueg rounded-full">
            Get Started
          </button>
        </div>
      </section>
      <section className="h-screen bg-dark-blue-main"></section>
    </main>
  );
}

export default App;
