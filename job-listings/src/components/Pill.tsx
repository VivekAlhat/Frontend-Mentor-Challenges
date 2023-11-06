const Pill: React.FC<PillProps> = (props) => {
  const { name, colors } = props;

  return (
    <p
      className={`px-2 text-sm inline-flex items-center text-center rounded-full ${colors}`}
    >
      {name}
    </p>
  );
};

export default Pill;
