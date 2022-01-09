#!/usr/bin/env node

// Example run: node cli.js -cs lower -cpx high

import { program } from "commander";
import generateMonster from "./index";

program
  .option(
    "-cpx --complexity <complexity>",
    "Option how many adjectives return value as: low | medium | high",
    "low"
  )
  .option(
    "-cs --casing <casing>",
    "Option how the return string is formatted: capitalize | upper | lower"
  )
  .parse();

const options = program.opts();
if (options.complexity) console.log(`Option <complexity>: ${options.complexity}`);
if (options.casing) console.log(`Option <casing>: ${options.casing}`);

console.log("Result:", generateMonster({
  complexity: options.complexity,
  casing: options.casing,
}));
