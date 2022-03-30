// write the cli logic
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { League } from "./league";
import fs from "fs";

const args = yargs(hideBin(process.argv)).argv as any;

if (args.text) {
  try {
    const league = new League();
    // league.displayLeaguePoints(args.text);
    console.log(league.displayLeaguePoints(args.text));
    // console.log(args.text);

  } catch (e) {
    // console.error('Please check if your text');
    console.error(e);
  }
}

if (args.file) {
  try {
    const league = new League();
    const inputText = fs.readFileSync(args.file, "utf-8");
    // league.displayLeaguePoints(inputText)
    console.log(league.displayLeaguePoints(inputText));
    // console.log(inputText);

  } catch (e) {
    // console.error('Please check if your text');
    console.error(e);
  }
}


// '"Lions 3, Snakes 3\nTarantulas 1, FC Awesome 0\nLions 1, FC Awesome 1\nTarantulas 3, Snakes 1\nLions 4, Grouches 0"'