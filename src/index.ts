import { IOptions } from "./types";
import { generate } from "./monsterGenerator";

export default (options: IOptions) => {
  return generate(options.complexity);
};
