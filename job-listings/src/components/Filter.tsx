const Filter: React.FC<FilterProps> = ({ name }) => {
  return (
    <p
      key={name}
      className="px-2 py-1 rounded-sm bg-light-cyan-filter text-dark-cyan cursor-pointer hover:bg-dark-cyan hover:text-white"
    >
      {name}
    </p>
  );
};

export default Filter;
