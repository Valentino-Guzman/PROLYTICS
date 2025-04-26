import { Component, OnInit } from '@angular/core';
import { ChampionsStatsService } from '../../../services/champions-stats.service';
import { ChampionStats } from '../../../interfaces/stats';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-winrate-stats',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './home-winrate-stats.component.html',
  styleUrl: './home-winrate-stats.component.css'
})
export class HomeWinrateStatsComponent implements OnInit{

  champions: ChampionStats[] = [];

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
    private championsStats: ChampionsStatsService
  ) {}

  ngOnInit(){
    this.getChampionsStats();
  }

  getChampionsStats() {
    this.championsStats.getChampionsStats().subscribe((data) => {
      this.champions = data;
    })
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
