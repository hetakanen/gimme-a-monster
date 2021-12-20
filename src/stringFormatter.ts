import { Casing } from "./types";

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const format = (str: string, casing?: Casing) => {
  switch (casing) {
    case "capitalize":
      return capitalize(str);
    case "upper":
      return str.toUpperCase();
    case "lower":
      return str.toLocaleLowerCase();
    default:
      return str;
  }
};
