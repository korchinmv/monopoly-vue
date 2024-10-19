export const formatterNum = (num) => {
  if (num > 1000000) {
    return (num / 1000000).toFixed(0) + " M";
  } else if (num > 1000) {
    return (num / 1000).toFixed(0) + " K";
  }

  return num.toString();
};
