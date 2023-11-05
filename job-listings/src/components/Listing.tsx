import Filter from "./Filter";
import Separator from "./Separator";

const Listing: React.FC<ListingProps> = ({ listing }) => {
  const {
    logo,
    company,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  } = listing;

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-md relative ${
        featured && "border-l-4 border-l-dark-cyan"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full">
        <img
          className="absolute h-[45px] w-[45px] -top-5 left-5 sm:sticky sm:h-fit sm:w-fit sm:top-5"
          src={logo}
          alt={company}
        />
        <div className="space-y-2 mt-4 sm:mt-0">
          <div className="flex gap-6">
            <p className="text-dark-cyan font-bold">{company}</p>
            {isNew && (
              <p className="px-2 text-sm bg-dark-cyan text-white inline-flex items-center rounded-full">
                NEW!
              </p>
            )}
            {featured && (
              <p className="px-2 text-sm bg-very-dark-grayish-cyan inline-flex items-center text-white rounded-full">
                FEATURED
              </p>
            )}
          </div>
          <h1 className="cursor-pointer text-lg text-very-dark-grayish-cyan hover:text-dark-cyan font-bold">
            {position}
          </h1>
          <div className="flex gap-4 text-dark-grayish-cyan">
            <p>{postedAt}</p>
            &middot;
            <p>{contract}</p>
            &middot;
            <p>{location}</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap justify-start sm:justify-end gap-2 w-full">
        <Filter name={role} />
        <Filter name={level} />
        {languages.length > 0 &&
          languages.map((lang) => <Filter name={lang} />)}
        {tools.length > 0 && tools.map((tool) => <Filter name={tool} />)}
      </div>
    </div>
  );
};

export default Listing;
