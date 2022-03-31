import { readFileSync } from "fs";
import path from "path";
import { League } from "./league";

export class RankingConsole {
  constructor() {}

  public runTextCmd(text: string) {
    try {
      const league = new League();
      console.log(league.displayLeaguePoints(text));
    } catch (e) {
      console.error(e);
    }
  }

  public runFileCmd(filePath: string) {
    try {

      if(path.extname(filePath) ! === '.txt') 
        throw  `Cannot open this file, check if your file is .txt and if you're passing a correct path`;
      
      const league = new League();
      const inputText = readFileSync(filePath, "utf-8");
      console.log(league.displayLeaguePoints(inputText));
    } catch (e) {
      console.error(e);
    }
  }
}