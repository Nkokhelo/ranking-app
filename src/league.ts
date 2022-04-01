interface Team {
  name: string;
  score: number;
}

export class League {
  // accept text convert it to array of objects
  // private matchArray: Array<Team[]> = [];
  public rankingsMap: Map<string, number> = new Map();
  constructor() {}

  public displayLeaguePoints(matchesInput: string): string {
    const matchesArray = this.convertInputToArray(matchesInput);
    const rankingsMap = this.rankTeams(matchesArray);
    const sortedRankingArray = this.sortRanking(rankingsMap);
    const outputText = sortedRankingArray.map((t, i) => this.teamOutput(t, i)).join('\n');
    return outputText;
  }

  public sortRanking(map: Map<string, number>) {
    let sortedArray = [...map].sort((a, b) =>  {
      const sortValue = b[1] - a[1];
      return sortValue == 0 ? a[0].localeCompare(b[0]) : sortValue;
    });
    return sortedArray;
  }

  public rankTeams(matches: Array<Team[]>): Map<string, number> {
    for (const match of matches) {
      this.updateTeamsMap(match[0], match[1]);
    }
    return this.rankingsMap;
  }

  public convertInputToArray(matchesInput: string) {

    const splitReg = /\r/.test(matchesInput)? '\r\n': /\n/.test(matchesInput)? '\n' : '\\n';
    const matches = matchesInput.trim().split(splitReg)
      .map((match) => {
        if(/^([A-Za-z\s]+\d+)$/.test(match))
          throw 'Invalid input';

        return match.trim().split(", ")
          .map((teamInput) => {

            const teamData = teamInput;
            const team = {
              name: teamData.match(/\D*/)[0].trim(),
              score: Number(teamData.match(/\d+/)[0]),
            };
            return team;
          })
      }
      );
    return matches;
  }

  
  private updateTeamsMap(firstTeam: Team, secondTeam: Team): Map<string, number> {
    switch (true) {
      case firstTeam.score == secondTeam.score:
        const points = firstTeam.score == 0 ? 0: 1;
        this.updateTeamPoints(firstTeam, points);
        this.updateTeamPoints(secondTeam, points);
        break;

      case firstTeam.score > secondTeam.score:
        this.updateTeamPoints(firstTeam, 3);
        this.updateTeamPoints(secondTeam, 0);
        break;

      case secondTeam.score > firstTeam.score:
        this.updateTeamPoints(firstTeam, 0);
        this.updateTeamPoints(secondTeam, 3);
        break;
    }
    return this.rankingsMap;
  }

  private updateTeamPoints(team: Team, points: number) {
    let prevPoints = 0;

    if (this.rankingsMap.has(team.name)) {
      prevPoints = this.rankingsMap.get(team.name);
    }
    this.rankingsMap.set(team.name, prevPoints + points);
  }

  private teamOutput(team: any[], index: number): string {
    const points = team[1] != 1 ? `${team[1]} pts` : `${team[1]} pt`;
    return `${index + 1}. ${team[0]}, ${points}`;
  }
  
}

