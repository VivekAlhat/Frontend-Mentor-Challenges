import Link from "../atom/Link";

const NavLinks = ({ links }) => {
  return (
    <ul className="flex gap-12 invisible sm:visible">
      {links.map((link, id) => (
        <li key={id}>
          <Link link={link} />
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
