import * as Switch from "@radix-ui/react-switch";
import useTheme from "../../hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Switch.Root
      className="w-[50px] h-[25px] bg-light-toggle dark:bg-gradient-to-r from-dark-toggle-from to-dark-toggle-to rounded-full relative outline-none cursor-pointer"
      checked={theme === "light"}
      onClick={handleThemeChange}
    >
      <Switch.Thumb className="block w-[21px] h-[21px] bg-white dark:bg-dark-desaturated-blue-card-bg-d rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[27px]" />
    </Switch.Root>
  );
};

export default ThemeSwitch;
