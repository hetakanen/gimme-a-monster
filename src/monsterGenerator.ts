import * as colors from "./data/color-options.json";
import * as shapes from "./data/shape-options.json";
import * as mouths from "./data/mouth-options.json";
import * as eyes from "./data/eye-options.json";
import * as monsters from "./data/monster-options.json";
import { getRandomValue, getRandomNumber } from "./randomValueGenerator";
import { Complexity, IMonster, IMonsterProps } from "./types";

export const generate = (complexity: Complexity = "low") => {
  const result: IMonster = {
    stringified: "",
    properties: {},
  };

  if (complexity === "high") {
    result.properties.eyeAmount = getRandomNumber(10);
    result.properties.eyes = getRandomValue(eyes);
  }

  if (complexity === "high" || complexity === "medium") {
    result.properties.mouth = getRandomValue(mouths);
    result.properties.shape = getRandomValue(shapes);
  }

  result.properties.color = getRandomValue(colors);
  result.properties.type = getRandomValue(monsters);
  result.stringified = toString(result.properties);
  return result;
};

/**
 * Loop through monster properties and add values to string with spaces
 * Trim the space at the end
 * @param props
 * @returns string of properties with spaces between values
 */
const toString = (props: IMonsterProps) => {
  let str = "";
  for (const prop in props) {
    str += `${props[prop as keyof IMonsterProps]} `;
  }

  return str.trim();
};
