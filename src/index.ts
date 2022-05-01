import { IOptions } from "./types";
import { generate } from "./monsterGenerator";

module.exports = {
  generateMonster: (options: IOptions) => {
    return generate(options);
  },
};
