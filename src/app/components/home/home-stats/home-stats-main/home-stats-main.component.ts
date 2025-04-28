import { Component } from '@angular/core';
import { HomeWinrateStatsComponent } from "../home-winrate-stats/home-winrate-stats.component";
import { ChampionsStatsService } from '../../../../services/champions-stats.service';
import { BansStatsService } from '../../../../services/bans-stats.service';
import { BanStats, ChampionStats, OtpStats } from '../../../../interfaces/stats';
import { NgIf } from '@angular/common';
import { HomeBanStatsComponent } from '../home-ban-stats/home-ban-stats.component';
import { HomeOtpStatsComponent } from "../home-otp-stats/home-otp-stats.component";
import { OtpService } from '../../../../services/otp.service';

@Component({
  selector: 'app-home-stats-main',
  imports: [HomeWinrateStatsComponent, NgIf, HomeBanStatsComponent, HomeOtpStatsComponent],
  templateUrl: './home-stats-main.component.html',
  styleUrl: './home-stats-main.component.css'
})
export class HomeStatsMainComponent {

  champions: ChampionStats[] = [];
  bans: BanStats[] = [];
  otp: OtpStats[] = [];

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
    private BansStatsService: BansStatsService,
    private otpStatsService: OtpService
  ) {}

  ngOnInit(){
    this.getChampionsStats();
    this.getBansStats();
    this.getOtpStats();
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

  getOtpStats() {
    this.otpStatsService.getOtpStats().subscribe((data) => {
      this.otp = data.map((otp) => ({
        ...otp,
        summonerName: otp.summonerName.split('#')[0]
      }));
    });
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }

  getRoleIcon(role: string): string {
    return this.roles[role] || '';
  }

  getTier(winrate: number, games: number): string {
    if (winrate >= 50 && games >= 5) return 'S+';
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
