import useFilter from "../hooks/useFilter";

const Filter: React.FC<FilterProps> = ({ name }) => {
  const { addFilter } = useFilter();

  const handleFilterChange = () => {
    addFilter(name);
  };

  return (
    <p
      className="px-2 py-1 rounded-md bg-light-cyan-filter text-dark-cyan cursor-pointer hover:bg-dark-cyan hover:text-white"
      onClick={handleFilterChange}
    >
      {name}
    </p>
  );
};

export default Filter;
