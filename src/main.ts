#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { League } from "./league";
import { readFileSync } from "fs";
import path from "path";

const args = yargs(hideBin(process.argv)).argv as any;



if (args.testApp) {
  console.log("App name: ranking-app");
}

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

    if(path.extname(args.file) ! === '.txt') 
      throw  `Cannot open this file, check if your file is .txt and if you're passing a correct path`;
    

    const league = new League();
    const inputText = readFileSync(args.file, "utf-8");
    console.log(league.displayLeaguePoints(inputText));

  } catch (e) {
    console.error(e);
  }
}

