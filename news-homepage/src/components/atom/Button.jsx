const Button = ({ text }) => {
  return (
    <button className="bg-soft-red hover:bg-very-dark-blue text-off-white p-3 uppercase tracking-widest transition-all ease-linear w-48 mt-10">
      {text}
    </button>
  );
};

export default Button;
