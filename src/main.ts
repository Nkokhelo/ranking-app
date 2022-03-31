#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { RankingConsole } from "./rankingConsole";

const args = yargs(hideBin(process.argv)).argv as any;
const rankingConsole = new RankingConsole();


if (args.testApp) {
  console.log("App name: ranking-app");
}

if (args.text) {
  rankingConsole.runTextCmd(args.text)
}

if (args.file) {
  rankingConsole.runFileCmd(args.text)
}

