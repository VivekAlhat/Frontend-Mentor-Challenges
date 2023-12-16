export const formatNumber = (value) => {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value.endsWith("k") && parseInt(value) * 1000;
  }
};
