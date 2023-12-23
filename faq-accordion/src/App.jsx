import faq from "../data/data.json";

function App() {
  return (
    <main className="h-screen bg-light-pink relative">
      <div className="bg-mobile sm:bg-desktop h-60"></div>
      <section className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-8 rounded-xl lg:p-8 shadow-md">
        <div className="inline-flex items-center gap-4">
          <img src="/assets/images/icon-star.svg" alt="star icon" />
          <h1 className="font-bold text-5xl text-dark-purple">FAQs</h1>
        </div>
        <div className="flex flex-col gap-4">
          {faq.map((f) => (
            <div key={f.id} className="space-y-3">
              <div className="inline-flex items-center justify-between w-full gap-8">
                <p className="text-dark-purple font-semibold">{f.question}</p>
                <img
                  src="/assets/images/icon-plus.svg"
                  alt="expand"
                  className="cursor-pointer"
                />
                {/* <img
                  src="/assets/images/icon-minus.svg"
                  alt="collpase"
                  className="cursor-pointer"
                /> */}
              </div>
              {/* <p>{f.answer}</p> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
