import Icon from "../atom/Icon";
import Link from "../atom/Link";
import { links } from "../../utils/constant";
import { motion } from "framer-motion";

const MobileMenu = ({ closeMenu }) => {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };
  const listItemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

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
      <motion.ul
        variants={listVariants}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-12 mt-28 pl-5"
      >
        {links.map((link, id) => (
          <motion.li key={id} variants={listItemVariants}>
            <Link link={link} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MobileMenu;
