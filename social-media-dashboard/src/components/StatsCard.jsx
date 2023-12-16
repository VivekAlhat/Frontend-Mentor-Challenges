import ChangeIcon from "./ChangeIcon";

const StatsCard = ({ text, platform, count, change, isUp }) => {
  return (
    <div className="flex flex-col p-8 gap-6 text-center bg-light-grayish-blue-bg-card-l dark:bg-dark-desaturated-blue-card-bg-d rounded-md cursor-pointer hover:bg-very-pale-blue-bg-top-l dark:hover:bg-dark-desaturated-blue-card-bg-d/80">
      <div className="flex items-center justify-between">
        <p className="capitalize text-dark-grayish-blue-text-l dark:text-desaturated-blue-text-d font-bold">
          {text}
        </p>
        <img src={`/images/icon-${platform}.svg`} alt={`${platform} icon`} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">{count}</p>
        <div className="flex items-center gap-2">
          <ChangeIcon isUp={isUp} />
          <p
            className={`${
              isUp ? "text-green-600" : "text-red-600"
            } font-semibold text-sm`}
          >
            {change}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
