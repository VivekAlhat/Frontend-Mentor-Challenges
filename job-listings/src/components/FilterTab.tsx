import useFilter from "../hooks/useFilter";

const FilterTab = () => {
  const { filter, clearFilter } = useFilter();

  const clearAllFilters = () => {
    clearFilter();
  };

  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 transform -translate-y-20 rounded-md">
      <div className="flex flex-wrap items-center gap-4">
        {filter.map((item) => (
          <div
            key={item}
            className="flex gap-3 items-center bg-light-cyan-background text-dark-cyan rounded-md"
          >
            <p className="px-2">{item}</p>
            <img
              src="/images/icon-remove.svg"
              alt="Delete Filter"
              className="bg-dark-cyan p-2 rounded-r-md hover:bg-very-dark-grayish-cyan cursor-pointer"
              onClick={() => clearFilter(item)}
            />
          </div>
        ))}
      </div>
      <p
        className="cursor-pointer font-semibold text-very-dark-grayish-cyan hover:text-dark-cyan"
        onClick={clearAllFilters}
      >
        Clear
      </p>
    </div>
  );
};

export default FilterTab;
