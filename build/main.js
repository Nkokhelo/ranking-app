#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
const league_1 = require("./league");
const fs_1 = require("fs");
const args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).argv;
if (args.text) {
    try {
        const league = new league_1.League();
        console.log(league.displayLeaguePoints(args.text));
    }
    catch (e) {
        console.error(e);
    }
}
if (args.file) {
    try {
        const league = new league_1.League();
        const inputText = (0, fs_1.readFileSync)(args.file, "utf-8");
        console.log(league.displayLeaguePoints(inputText));
    }
    catch (e) {
        console.error(e);
    }
}
if (args.testApp) {
    console.log("The command app is installed");
}
