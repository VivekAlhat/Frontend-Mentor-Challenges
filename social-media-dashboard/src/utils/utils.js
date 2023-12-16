export const formatNumber = (value) => {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value.endsWith("k") && parseInt(value) * 1000;
  }
};

export const convertToK = (n) => {
  if (n >= 10000) return +(n / 1e3).toFixed(1) + "K";
  return n;
};
