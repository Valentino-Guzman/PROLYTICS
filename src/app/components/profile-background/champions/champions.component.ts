import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../services/match.service';
import { SharedDataService } from '../../../services/shared-data.service';
import { Participant } from '../../../interfaces/player-stats';
import { CommonModule } from '@angular/common';
import { count, map } from 'rxjs';

@Component({
  selector: 'app-champions',
  imports: [CommonModule],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css'
})
export class ChampionsComponent implements OnInit {
  
  playerPuuid: string = '';
  championSummary: {
    champion: Participant;
    count: number;
    avgKills: number;
    avgDeaths: number;
    avgAssists: number;
    avgMinions: number;
    winrate: number;
  }[] = [];

  constructor(
    private sharedData: SharedDataService 
  ) {}
  
  ngOnInit() {
    this.sharedData.accountData$.subscribe(data => {
      this.playerPuuid = data.puuid;
    });
    this.getChampions();
  }
  
  getChampions() {
    this.sharedData.championName$.subscribe((data: Participant[]) => {
      const map = new Map<string, {
        champion: Participant;
        count: number;
        totalKills: number;
        totalDeaths: number;
        totalAssists: number;
        totalWins: number;
        totalMinions: number;
        championId: number;
      }>();
  
      data.forEach(champ => {
        if (!map.has(champ.championName)) {
          map.set(champ.championName, {
            champion: champ,
            count: 1,
            totalKills: champ.kills,
            totalDeaths: champ.deaths,
            totalAssists: champ.assists,
            totalWins: champ.win ? 1 : 0,
            totalMinions: champ.totalMinionsKilled + champ.neutralMinionsKilled,
            championId: champ.championId
          });
        } else {
          const entry = map.get(champ.championName)!;
          entry.count++;
          entry.totalKills += champ.kills;
          entry.totalDeaths += champ.deaths;
          entry.totalAssists += champ.assists;
          entry.totalWins += champ.win ? 1 : 0;
          entry.totalMinions += champ.totalMinionsKilled + champ.neutralMinionsKilled;;
        }
      });
  
      this.championSummary = Array.from(map.values()).map(entry => ({
        champion: entry.champion,
        count: entry.count,
        avgKills: entry.totalKills / entry.count,
        avgDeaths: entry.totalDeaths / entry.count,
        avgAssists: entry.totalAssists / entry.count,
        winrate: (entry.totalWins / entry.count) * 100,
        avgMinions: entry.totalMinions / entry.count
      })).sort((a, b) => b.count - a.count);
    });
  }
}
