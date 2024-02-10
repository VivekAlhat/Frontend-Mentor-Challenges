import Header from "./components/Header";

function App() {
  return (
    <main className="text-white">
      <Header />
      <section className="bg-dark-blue-intro-signup flex flex-col items-center justify-center gap-8 relative">
        <div className="z-10 max-w-xl px-6 md:px-8 lg:px-12 pt-12 pb-28 md:mb-24">
          <img
            src="/illustration-intro.png"
            alt="Illustration Intro"
            className="h-fit w-[600px]"
          />
          <div className="font-opensans text-center space-y-8">
            <h1 className="text-3xl font-bold leading-[3rem] lg:leading-[3rem] md:text-3xl">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-lg text-white/80 leading-[1.5rem]">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button className="font-semibold font-raleway border-none outline-none py-3 w-[250px] bg-gradient-to-r from-cyang to-blueg rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <picture>
          <source
            srcSet="/bg-curvy-desktop.svg"
            media="(min-width: 600px)"
            className="w-full absolute bottom-0 left-0"
          />
          <img
            src="/bg-curvy-mobile.svg"
            alt="curve"
            className="w-full absolute bottom-0 left-0"
          />
        </picture>
      </section>
      <section className="bg-dark-blue-main grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 lg:p-24 place-items-center">
        <div className="flex flex-col items-center justify-center text-center max-w-md gap-4 p-4">
          <img src="/icon-access-anywhere.svg" alt="Access Anywhere" />
          <div className="space-y-2">
            <h1 className="text-xl">Access your files, anywhere</h1>
            <p className="text-white/80">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-md gap-4 p-4">
          <img src="/icon-security.svg" alt="Access Anywhere" />
          <div className="space-y-2">
            <h1 className="text-xl">Security you can trust</h1>
            <p className="text-white/80">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-md gap-4 p-4">
          <img src="/icon-collaboration.svg" alt="Access Anywhere" />
          <div className="space-y-2">
            <h1 className="text-xl">Real-time collaboration</h1>
            <p className="text-white/80">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-md gap-4 p-4">
          <img src="/icon-any-file.svg" alt="Access Anywhere" />
          <div className="space-y-2">
            <h1 className="text-xl">Store any type of file</h1>
            <p className="text-white/80">
              Whether you&apos;re sharing holidays photos or work documents,
              Fylo has you covered allowing for all file types to be securely
              stored and shared.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
