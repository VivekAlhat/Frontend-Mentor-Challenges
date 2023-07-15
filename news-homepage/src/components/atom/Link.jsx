import useMobileProvider from "../../hooks/useMobileProvider";

const Link = ({ link }) => {
  const [isMobileMenuOpen, handleToggleMobileMenu] = useMobileProvider();

  return (
    <a
      href="#"
      className={`text-dark-grayish-blue hover:text-soft-orange text-[17px] font-bold ${
        isMobileMenuOpen && "text-very-dark-blue text-[20px]"
      }"`}
      onClick={() => isMobileMenuOpen && handleToggleMobileMenu()}
    >
      {link}
    </a>
  );
};

export default Link;
