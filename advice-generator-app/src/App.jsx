import { useEffect, useState } from "react";

import useMediaQuery from "./hooks/useMediaQuery";
import Loader from "./components/Loader";
import Advice from "./components/Advice";

function App() {
  const [adviceDetails, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isDesktop = useMediaQuery("(min-width:960px)");

  const pattern = isDesktop ? "desktop" : "mobile";

  const getAdvice = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    setAdvice(advice.slip);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      getAdvice();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="bg-dark-blue h-screen grid place-items-center">
      <section className="max-h-[400px] max-w-[400px] md:max-w-[500px] lg:max-w-[700px] flex flex-col items-center justify-evenly gap-8 relative bg-dark-grayish-blue p-12 rounded-2xl">
        {isLoading ? (
          <Loader />
        ) : (
          <Advice
            adviceDetails={adviceDetails}
            pattern={pattern}
            getAdvice={getAdvice}
          />
        )}
      </section>
    </div>
  );
}

export default App;
