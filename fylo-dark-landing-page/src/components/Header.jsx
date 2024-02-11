import { navlinks } from "../utils/data";

export default function Header() {
  return (
    <nav className="flex gap-6 items-center justify-between bg-dark-blue-intro-signup pt-8 px-6 md:px-8 lg:px-12">
      <img
        src="/logo.svg"
        alt="Fylo Logo"
        className="h-fit w-24 max-[320px]:w-16"
      />
      <ul className="font-raleway flex items-center justify-between gap-4 md:gap-10">
        {navlinks.map((link) => (
          <li
            key={link}
            className="capitalize text-sm md:text-[14px] text-white/80 hover:text-white hover:underline cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
