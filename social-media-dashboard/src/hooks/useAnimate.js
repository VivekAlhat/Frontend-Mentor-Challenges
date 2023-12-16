import { animate } from "framer-motion";
import { useEffect, useState } from "react";
import { convertToK } from "../utils/utils";

const useAnimate = (maxValue, duration = 1) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, maxValue, {
      duration,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [duration, maxValue]);

  return convertToK(count);
};

export default useAnimate;
