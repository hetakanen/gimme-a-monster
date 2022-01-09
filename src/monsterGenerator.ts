import colors from "./data/color-options.json";
import sizes from "./data/size-options.json";
import shapes from "./data/shape-options.json";
import mood from "./data/mood-options.json";
import eyes from "./data/eye-options.json";
import monsters from "./data/monster-options.json";
import patterns from "./data/pattern-options.json";
import { getRandomValue, getRandomNumber } from "./randomValueGenerator";
import { IMonster, IMonsterProps, IOptions } from "./types";
import { format } from "./stringFormatter";

export const generate = (options: IOptions) => {
  const { complexity, casing } = options;

  const result: IMonster = {
    stringified: "",
    properties: {},
  };

  if (complexity === "high") {
    result.properties.eyeAmount = getRandomNumber(10, 1);
    result.properties.eyes = getRandomValue(eyes);
  }

  if (complexity === "high" || complexity === "medium") {
    result.properties.size = getRandomValue(sizes);
    result.properties.mood = getRandomValue(mood);
    result.properties.shape = getRandomValue(shapes);
  }

  result.properties.color = getRandomValue(colors);
  result.properties.pattern = getRandomValue(patterns);
  result.properties.type = getRandomValue(monsters);

  const str = toString(result.properties);
  result.stringified = format(str, casing);
  return result;
};

/**
 * Loop through monster properties and add values to string with spaces
 * Trim the space at the end
 * @param props
 * @returns string of properties with spaces between values
 */
const toString = (props: IMonsterProps) => {
  const arr = [];
  for (const prop in props) {
    arr.push(props[prop as keyof IMonsterProps]);
  }

  return arr.join(" ");
};
