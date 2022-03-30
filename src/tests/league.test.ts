import { League } from "../league";

const matchesArray = [
  [
    { name: "Lions", score: 3 },
    { name: "Snakes", score: 3 },
  ],
  [
    { name: "Tarantulas", score: 1 },
    { name: "FC Awesome", score: 0 },
  ],
  [
    { name: "Lions", score: 1 },
    { name: "FC Awesome", score: 1 },
  ],
  [
    { name: "Tarantulas", score: 3 },
    { name: "Snakes", score: 1 },
  ],
  [
    { name: "Lions", score: 4 },
    { name: "Grouches", score: 0 },
  ],
];


describe("League", () => {
  let league: League;

  beforeEach(() => {
    league = new League();
  });

  it("can convert input to match array", () => {

    const leagueText = `Lions 3, Snakes 3
      Tarantulas 1, FC Awesome 0
      Lions 1, FC Awesome 1
      Tarantulas 3, Snakes 1
      Lions 4, Grouches 0`;

    expect(league.convertInputToArray(leagueText).sort()).toEqual(matchesArray.sort());
  });

  it("can convert array to ranked map", () => {
    const expectedRankedMap = new Map([
      ["FC Awesome", 1],
      ["Lions", 5],
      ["Grouches", 0],
      ["Snakes", 1],
      ["Tarantulas", 6],
    ]);

    league.rankTeams(matchesArray);
    expect(league.rankingsMap).toEqual(expectedRankedMap);
  });

  it("can sort by score and then team name", () => {
    const unsortedRank = new Map([
      ["FC Awesome", 1],
      ["Lions", 5],
      ["Grouches", 0],
      ["Snakes", 1],
      ["Tarantulas", 6],
    ]);

    const sortedRank = new Map([
      ["Tarantulas", 6],
      ["Lions", 5],
      ["FC Awesome", 1],
      ["Snakes", 1],
      ["Grouches", 0],
    ]);

    var received = league.sortRanking(unsortedRank);
    expect(received).toEqual([...sortedRank]);
  });


  it("can display output", () => {
    const league = new League();
    const leagueText = `Lions 3, Snakes 3
      Tarantulas 1, FC Awesome 0
      Lions 1, FC Awesome 1
      Tarantulas 3, Snakes 1
      Lions 4, Grouches 0`;


    expect(league.displayLeaguePoints(leagueText)).toMatch(`1. Tarantulas, 6 pts\n2. Lions, 5 pts\n3. FC Awesome, 1 pt\n4. Snakes, 1 pt\n5. Grouches, 0 pts`)
  });
});
