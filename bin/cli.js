#!/usr/bin/env node
const program=require("commander")["program"],index=require("../dist/index.js");program.option("-cpx --complexity <complexity>","Option how many adjectives return value as: low | medium | high","low").option("-cs --casing <casing>","Option how the return string is formatted: capitalize | upper | lower").parse();const options=program.opts();options.complexity&&console.log("Option <complexity>: "+options.complexity),options.casing&&console.log("Option <casing>: "+options.casing),console.log("Result:",index.generateMonster({complexity:options.complexity,casing:options.casing}));