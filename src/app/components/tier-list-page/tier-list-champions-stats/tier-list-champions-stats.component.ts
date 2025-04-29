import { Component, Input } from '@angular/core';
import { ChampionStats } from '../../../interfaces/stats';
import { ChampionsStatsService } from '../../../services/champions-stats.service';
import { NgFor } from '@angular/common';
import { TierListChampionsComponent } from "../tier-list-champions-main/tier-list-champions/tier-list-champions.component";

@Component({
  selector: 'app-tier-list-champions-stats',
  imports: [NgFor, TierListChampionsComponent],
  templateUrl: './tier-list-champions-stats.component.html',
  styleUrl: './tier-list-champions-stats.component.css'
})
export class TierListChampionsStatsComponent {

  championsStats: ChampionStats[] = [];
  
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

  constructor(
    private championStatsService: ChampionsStatsService,
  ) {}

  ngOnInit() {
    this.getChampionStats();
  }

  getChampionStats() {
    this.championStatsService.getChampionsStats().subscribe((data) => {
      this.championsStats = data;
      console.log(this.championsStats);
    });
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }
}
