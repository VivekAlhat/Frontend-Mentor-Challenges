import { useContext } from "react";
import { MobileContext } from "../context/MobileContext";

const useMobileProvider = () => {
  return useContext(MobileContext);
};

export default useMobileProvider;
