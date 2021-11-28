import { IOptions } from "./types";
import { generate } from "./monster-generator";

export default (options: IOptions) => {
  return generate(options.complexity);
};
