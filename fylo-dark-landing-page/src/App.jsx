import Header from "./components/Header";
import Curve from "./components/Curve";
import CTA from "./components/CTA";
import Feature from "./components/Feature";

import { features, testimonials } from "./utils/data";

function App() {
  return (
    <main className="text-white">
      <Header />
      <section className="bg-dark-blue-intro-signup flex flex-col items-center justify-center gap-8 relative">
        <div className="z-10 max-w-xl px-6 md:px-8 lg:px-12 pt-12 pb-28 md:mb-12">
          <img
            src="/illustration-intro.png"
            alt="Illustration Intro"
            className="h-fit w-[600px] mb-12"
          />
          <div className="font-opensans text-center space-y-8">
            <h1 className="text-2xl font-bold leading-[2rem] lg:leading-[3rem] md:text-3xl">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-lg text-white/80 leading-[1.5rem]">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <CTA text="Get Started" />
          </div>
        </div>
        <Curve />
      </section>
      <section className="bg-dark-blue-main p-6 md:p-12 lg:p-24 space-y-20 lg:space-y-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
          {features.map((f) => (
            <Feature
              key={f.id}
              icon={f.icon}
              alt={f.alt}
              feature={f.feature}
              description={f.description}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <img src="/illustration-stay-productive.png" alt="stay productive" />
          <div className="space-y-8 max-w-xl">
            <h1 className="text-xl lg:text-5xl">
              Stay productive, wherever you are
            </h1>
            <div className="space-y-6 text-white/80">
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-cyang border-b border-b-cyang"
              >
                See how Fylo works
                <span>
                  <img src="/icon-arrow.svg" alt="arrow icon" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="z-10 bg-dark-blue-testimonial p-8 space-y-4"
              >
                <p className="text-white/80">{t.testimonial}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.profile}
                    alt={t.name}
                    className="w-8 rounded-full"
                  />
                  <div className="text-sm space-y-1">
                    <p>{t.name}</p>
                    <p className="text-white/80 text-xs">{t.from}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src="/bg-quotes.png"
            alt="quotes"
            className="absolute -top-8 -left-3 w-12"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
