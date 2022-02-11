import { IOptions } from "./types";
import { generate } from "./monsterGenerator";

export const generateMonster = (options: IOptions) => {
  return generate(options);
};
