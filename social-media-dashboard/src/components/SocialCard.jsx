import clsx from "clsx";
import ChangeIcon from "./ChangeIcon";
import useAnimate from "../hooks/useAnimate";
import { formatNumber } from "../utils/utils";

const SocialCard = ({
  platform,
  user,
  statsCount,
  statsTitle,
  isUp,
  changeCount,
}) => {
  const borders = clsx(
    { "border-t-4 border-facebook": platform === "facebook" },
    { "border-t-4 border-twitter": platform === "twitter" },
    { "border-t-4 border-youtube": platform === "youtube" }
  );

  const count = useAnimate(formatNumber(statsCount));

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 text-center bg-light-grayish-blue-bg-card-l dark:bg-dark-desaturated-blue-card-bg-d p-8 rounded-md relative ${borders} cursor-pointer hover:bg-very-pale-blue-bg-top-l dark:hover:bg-dark-desaturated-blue-card-bg-d/80 overflow-hidden`}
    >
      {platform === "instagram" && (
        <div className="h-[4px] w-full bg-gradient-to-r from-instagram-from to-instagram-to absolute top-0 left-0 rounded-t-md"></div>
      )}
      <div className="flex items-center gap-3">
        <img src={`/images/icon-${platform}.svg`} alt={`${platform} icon`} />
        <p className="font-semibold text-dark-grayish-blue-text-l dark:text-desaturated-blue-text-d text-sm">
          {user}
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">{count}</h1>
        <p className="uppercase tracking-[4px] text-sm text-dark-grayish-blue-text-l dark:text-desaturated-blue-text-d">
          {statsTitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <ChangeIcon isUp={isUp} />
        <p
          className={`${
            isUp ? "text-green-600" : "text-red-600"
          } font-semibold`}
        >
          {changeCount} Today
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
