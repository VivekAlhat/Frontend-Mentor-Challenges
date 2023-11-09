import { createContext, useState } from "react";

const data = {
  filter: [],
  addFilter: () => {},
  clearFilter: () => {},
};

export const FilterContext = createContext<FilterContextProps>(data);

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string[]>([]);

  const addFilter = (name: string) => {
    const isApplied = filter.includes(name);
    if (!isApplied) {
      setFilter((prev) => [...prev, name]);
    }
  };

  const clearFilter = (name?: string) => {
    if (name) {
      const filteredListings = filter.filter((item) => item !== name);
      setFilter(filteredListings);
    } else {
      setFilter([]);
    }
  };

  return (
    <FilterContext.Provider value={{ filter, addFilter, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
