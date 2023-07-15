const Icon = ({ src, alt, onClick }) => {
  return (
    <img src={src} alt={alt} onClick={onClick} className="cursor-pointer" />
  );
};

export default Icon;
