import Icon from "../atom/Icon";
import Link from "../atom/Link";
import { links } from "../../utils/constant";
import { motion } from "framer-motion";

const MobileMenu = ({ closeMenu }) => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-off-white absolute top-0 right-0 w-[80%] md:w-[50%] p-5 z-[100]"
    >
      <div className="float-right">
        <Icon
          src="/images/icon-menu-close.svg"
          alt="close mobile menu"
          onClick={closeMenu}
        />
      </div>
      <ul className="flex flex-col gap-12 mt-28 pl-5">
        {links.map((link, id) => (
          <li key={id}>
            <Link link={link} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
