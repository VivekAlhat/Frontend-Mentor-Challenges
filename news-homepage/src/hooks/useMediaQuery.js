import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    /**
     * * matchMedia is a window function that takes queryString as a param
     * * and returns a mediaQuery object that can be used to check if a
     * * given query matches the document.
     */
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // * Set a listener on document to check for resize events
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    // * Cleanup function to remove listener from the document
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
