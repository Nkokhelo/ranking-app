"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
class League {
    constructor() {
        // accept text convert it to array of objects
        // private matchArray: Array<Team[]> = [];
        this.rankingsMap = new Map();
    }
    displayLeaguePoints(matchesInput) {
        const matchesArray = this.convertInputToArray(matchesInput);
        const rankingsMap = this.rankTeams(matchesArray);
        const sortedRankingArray = this.sortRanking(rankingsMap);
        const outputText = sortedRankingArray.map((t, i) => this.teamOutput(t, i)).join('\n');
        return outputText;
    }
    sortRanking(map) {
        let sortedArray = [...map].sort((a, b) => {
            const sortValue = b[1] - a[1];
            return sortValue == 0 ? a[0].localeCompare(b[0]) : sortValue;
        });
        return sortedArray;
    }
    rankTeams(matches) {
        for (const match of matches) {
            this.updateTeamsMap(match[0], match[1]);
        }
        return this.rankingsMap;
    }
    convertInputToArray(matchesInput) {
        const splitReg = /\r/.test(matchesInput) ? '\r\n' : /\n/.test(matchesInput) ? '\n' : '\\n';
        const matches = matchesInput.trim().split(splitReg)
            .map((match) => match.trim().split(", ")
            .map((teamInput) => {
            const teamData = teamInput;
            const team = {
                name: teamData.match(/\D*/)[0].trim(),
                score: Number(teamData.match(/\d+/)[0]),
            };
            return team;
        }));
        return matches;
    }
    updateTeamsMap(firstTeam, secondTeam) {
        switch (true) {
            case firstTeam.score == secondTeam.score:
                const points = firstTeam.score == 0 ? 0 : 1;
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
    updateTeamPoints(team, points) {
        let prevPoints = 0;
        if (this.rankingsMap.has(team.name)) {
            prevPoints = this.rankingsMap.get(team.name);
        }
        this.rankingsMap.set(team.name, prevPoints + points);
    }
    teamOutput(team, index) {
        const points = team[1] != 1 ? `${team[1]} pts` : `${team[1]} pt`;
        return `${index + 1}. ${team[0]}, ${points}`;
    }
}
exports.League = League;
