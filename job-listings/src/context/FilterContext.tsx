import { createContext, useState } from "react";

const data = {
  filter: [],
  changeFilter: () => {},
};

export const FilterContext = createContext<FilterContextProps>(data);

const FilterContextProvider: React.FC<FilterContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string[]>([]);

  const changeFilter = (name: string) => {
    setFilter((prev) => [...prev, name]);
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
