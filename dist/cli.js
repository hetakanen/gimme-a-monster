#!/usr/bin/env node
"use strict";
// Example run: node cli.js -cs lower -cpx high
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = __importDefault(require("./index"));
commander_1.program
    .option("-cpx --complexity <complexity>", "Option how many adjectives return value as: low | medium | high", "low")
    .option("-cs --casing <casing>", "Option how the return string is formatted: capitalize | upper | lower")
    .parse();
const options = commander_1.program.opts();
if (options.complexity)
    console.log(`Option <complexity>: ${options.complexity}`);
if (options.casing)
    console.log(`Option <casing>: ${options.casing}`);
console.log("Result:", (0, index_1.default)({
    complexity: options.complexity,
    casing: options.casing,
}));
