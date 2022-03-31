#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { League } from "./league";
import { readFileSync } from "fs";

const args = yargs(hideBin(process.argv)).argv as any;

if (args.text) {
  try {
    const league = new League();
    console.log(league.displayLeaguePoints(args.text));
  } catch (e) {
    console.error(e);
  }
}

if (args.file) {
  try {
    const league = new League();
    const inputText = readFileSync(args.file, "utf-8");
    console.log(league.displayLeaguePoints(inputText));
  } catch (e) {
    console.error(e);
  }
}

if (args.testApp) {
  console.log("The command app is installed");
}
