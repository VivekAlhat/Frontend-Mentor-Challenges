import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <nav className="flex justify-between gap-4 dark:bg-dark-mode-el py-5 px-4 md:px-8 lg:px-16 shadow-sm">
      <h1 className="text-lg font-bold">Where in the world?</h1>
      <ThemeToggle />
    </nav>
  );
}
