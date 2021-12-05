import * as colors from "./data/color-options.json";
import * as shapes from "./data/shape-options.json";
import * as mouths from "./data/mouth-options.json";
import * as eyes from "./data/eye-options.json";
import * as monsters from "./data/monster-options.json";
import { getRandomValue, getRandomNumber } from "./randomValueGenerator";
import { Complexity, IHighMonster, IMediumMonster, IMonster } from "./types";

export const generate = (complexity: Complexity = "low") => {
  const result: IMonster = {
    color: "",
    type: "",
    stringify: "",
  };

  if (complexity === "high") {
    addEyes(result as IHighMonster);
  }

  if (complexity === "high" || complexity === "medium") {
    addMouth(result as IMediumMonster);
    addShape(result as IMediumMonster);
  }

  addColor(result);
  addType(result);
  return result;
};

const addEyes = (result: IHighMonster) => {
  result.eyeAmount = getRandomNumber(10);
  result.eyes = getRandomValue(eyes) as string;
  result.stringify += result.eyeAmount + " " + result.eyes + " ";
};

const addMouth = (result: IMediumMonster) => {
  result.mouth = getRandomValue(mouths);
  result.stringify += result.mouth + " ";
};

const addShape = (result: IMediumMonster) => {
  result.shape = getRandomValue(shapes);
  result.stringify += result.shape + " ";
};

const addColor = (result: IMonster) => {
  result.color = getRandomValue(colors);
  result.stringify += result.color + " ";
};

const addType = (result: IMonster) => {
  result.type = getRandomValue(monsters);
  result.stringify += result.type;
};
