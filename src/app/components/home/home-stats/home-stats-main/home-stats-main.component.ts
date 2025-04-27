import { Component } from '@angular/core';
import { HomeWinrateStatsComponent } from "../home-winrate-stats/home-winrate-stats.component";
import { ChampionsStatsService } from '../../../../services/champions-stats.service';
import { BansStatsService } from '../../../../services/bans-stats.service';
import { BanStats, ChampionStats } from '../../../../interfaces/stats';
import { NgIf } from '@angular/common';
import { HomeBanStatsComponent } from '../home-ban-stats/home-ban-stats.component';

@Component({
  selector: 'app-home-stats-main',
  imports: [HomeWinrateStatsComponent, NgIf, HomeBanStatsComponent],
  templateUrl: './home-stats-main.component.html',
  styleUrl: './home-stats-main.component.css'
})
export class HomeStatsMainComponent {

  champions: ChampionStats[] = [];
  bans: BanStats[] = [];

  championImageFixes: Record<string, string> = {  
    "Kai'Sa": 'Kaisa',
    "Wukong": 'MonkeyKing',
    "LeBlanc": 'Leblanc',
    "Nunu & Willump": 'Nunu',
    "Renata Glasc": 'Renata',
    "Cho'Gath": 'Chogath',
    "Kha'Zix": 'Khazix',
    "Vel'Koz": 'Velkoz',
    "Rek'Sai": 'RekSai',
    "Bel'Veth": 'Belveth',
    "Kog'Maw": 'KogMaw',
    "K'Sante":'KSante',
    "Dr. Mundo": 'DrMundo',
    "Lee Sin": 'LeeSin',
    "Jarvan IV": 'JarvanIV',
    "Miss Fortune": 'MissFortune',
    "Xin Zhao": 'XinZhao',
    "Aurelion Sol": 'AurelionSol',
    "Tahm Kench": 'TahmKench',
    "Master Yi": 'MasterYi',
    "Twisted Fate": 'TwistedFate'
  };

  roles: Record<string, string> = {
    "TOP": "svg/role/top.svg",
    "JUNGLE": "svg/role/jungle.svg",
    "MIDDLE": "svg/role/midlane.svg",
    "BOTTOM": "svg/role/adc.svg",
    "UTILITY": "svg/role/support.svg"
  }
  
  constructor(
    private championsStats: ChampionsStatsService,
    private BansStatsService: BansStatsService
  ) {}

  ngOnInit(){
    this.getChampionsStats();
    this.getBansStats();
  }

  getChampionsStats() {
    this.championsStats.getChampionsStats().subscribe((data) => {
      this.champions = data;
    });
  }

  getBansStats() {
    this.BansStatsService.getBansStats().subscribe((data) => {
      this.bans = data;
    });
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }

  getRoleIcon(role: string): string {
    return this.roles[role] || '';
  }

  getTier(winrate: number, games: number): string {
    if (winrate >= 55 && games >= 300) return 'S+';
    if (winrate >= 53 && games >= 200) return 'S';
    if (winrate >= 51 && games >= 100) return 'A';
    if (winrate >= 49 && games >= 50) return 'B';
    if (winrate >= 47) return 'C';
    return 'D';
  }

  getPickRate(championGames: number): number {
    const totalGames = this.champions.reduce((acc, champ) => acc + champ.games, 0);
    return +(100 * championGames / totalGames).toFixed(2);
  }
}
