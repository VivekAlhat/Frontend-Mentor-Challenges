import { createContext, useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

export const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    if (isDesktop) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <MobileContext.Provider value={[isMobileMenuOpen, handleToggleMobileMenu]}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
