import ThemeSwitch from "./ui/ThemeSwitch";

const Header = ({ totalFollowers }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
        <p className="text-dark-grayish-blue-text-l dark:text-desaturated-blue-text-d font-bold">
          Total Followers: {totalFollowers}
        </p>
      </div>
      <hr className="border-t border-black dark:border-light-toggle md:invisible lg:invisible" />
      <div className="flex justify-between items-center gap-3">
        <p className="text-dark-grayish-blue-text-l dark:text-desaturated-blue-text-d font-semibold">
          Dark Mode
        </p>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
