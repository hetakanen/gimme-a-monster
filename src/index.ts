import { IOptions } from "./types";
import { generate } from "./monsterGenerator";

const generateMonster = (options: IOptions) => {
  return generate(options);
};

export default generateMonster;
