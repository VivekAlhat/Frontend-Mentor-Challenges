import { useState } from "react";
import faq from "../data/data.json";

function App() {
  const [activeId, setActiveId] = useState(1);

  return (
    <main className="min-h-screen bg-light-pink relative">
      <div className="bg-mobile sm:bg-desktop h-48 md:h-56 lg:h-60"></div>
      <section className="bg-white absolute max-w-min min-w-[300px] md:min-w-[600px] lg:min-w-[700px] left-1/2 transform -translate-x-1/2 flex flex-col gap-4 rounded-xl p-4 lg:p-8 shadow-lg -my-24 md:-my-28">
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/icon-star.svg"
            alt="star icon"
            className="h-5 sm:h-full"
          />
          <h1 className="font-bold text-3xl sm:text-5xl text-dark-purple">
            FAQs
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {faq.map((f) => (
            <div
              key={f.id}
              className={`space-y-3 py-3 ${
                f.id !== 4 && "border-b border-light-pink"
              }`}
            >
              <button
                onClick={() => setActiveId((id) => (id === f.id ? 0 : f.id))}
                aria-expanded={activeId === f.id}
                aria-controls={`accordion-content-${f.id}`}
                type="button"
                className="flex items-center justify-between w-full gap-8"
              >
                <span className="text-dark-purple text-left hover:text-purple cursor-pointer font-semibold">
                  {f.question}
                </span>

                <img
                  src={`${
                    activeId === f.id
                      ? "/assets/images/icon-minus.svg"
                      : "/assets/images/icon-plus.svg"
                  }`}
                  alt={`${activeId === f.id ? "collapse" : "expand"}`}
                  className="cursor-pointer"
                />
              </button>
              <p
                id={`accordion-content-${f.id}`}
                className="text-grayish-purple"
                hidden={activeId !== f.id}
                role="region"
              >
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
