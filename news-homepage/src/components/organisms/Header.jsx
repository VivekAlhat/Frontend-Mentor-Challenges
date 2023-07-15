import Icon from "../atom/Icon";
import NavLinks from "../molecule/NavLinks";
import MobileMenu from "../molecule/MobileMenu";
import useMediaQuery from "../../hooks/useMediaQuery";
import useMobileProvider from "../../hooks/useMobileProvider";
import { links } from "../../utils/constant";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:960px)");
  const [isMobileMenuOpen, handleToggleMobileMenu] = useMobileProvider();

  return (
    <>
      <nav className="flex items-center justify-between">
        <Icon src="/images/logo.svg" alt="news website logo" />
        {isDesktop ? (
          <NavLinks links={links} />
        ) : (
          <Icon
            src="/images/icon-menu.svg"
            alt="mobile menu"
            onClick={handleToggleMobileMenu}
          />
        )}
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu key={"mobile"} closeMenu={handleToggleMobileMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
