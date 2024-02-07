export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-dark-blue-intro-signup pt-8 px-6 md:px-8 lg:px-12">
      <img src="/logo.svg" alt="Fylo Logo" className="h-fit w-24" />
      <ul className="font-raleway flex items-center justify-between gap-5 md:gap-10">
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}
