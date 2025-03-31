import { Component, OnInit } from '@angular/core';
import { EloPlayerService } from '../../../services/elo-player.service';
import { EloPlayer } from '../../../interfaces/elo-player';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-elo-profile',
  imports: [NgIf, CommonModule],
  templateUrl: './elo-profile.component.html',
  styleUrl: './elo-profile.component.css'
})
export class EloProfileComponent implements OnInit {

  wins: number = 0;
  losses: number = 0;
  winRate: number = 0;

  eloPlayer: EloPlayer | null = null;
  color: string = '';
  rankType: string = '';
  eloIcon: string = '';
  colorElo: {[key: string]: string} = {
    'IRON': 'hierro',
    'BRONZE': 'bronce',
    'SILVER': 'plata',
    'GOLD': 'oro',
    'PLATINUM': 'platino',
    'EMERALD': 'emeralda',
    'DIAMOND': 'diamonte',
    'MASTER': 'master',
    'GRANDMASTER': 'grandmaster',
    'CHALLENGER': 'challenger'
  }
  eloIconImg: {[key: string]: string} = {
    'IRON': 'webp/profile/iron.png',
    'BRONZE': 'webp/profile/bronze.png',
    'SILVER': 'webp/profile/silver.png',
    'GOLD': 'webp/profile/gold.png',
    'PLATINUM': 'webp/profile/platinum.png',
    'EMERALD': 'webp/profile/emerald.png',
    'DIAMOND': 'webp/profile/diamond.png',
    'MASTER': 'webp/profile/master.png',
    'GRANDMASTER': 'webp/profile/grandmaster.png',
    'CHALLENGER': 'webp/profile/challenger.png'
  }

  constructor(
    private eloPlayerService: EloPlayerService,
  ) {}

  ngOnInit() {
    this.eloPlayerService.getEloPlayer().subscribe(
      (data:EloPlayer[]) => {
        this.eloPlayer = data[0];
        this.color = this.eloPlayer.tier;
        this.rankType = this.eloPlayer.queueType;
        this.eloIcon = this.eloPlayer.tier;
        this.wins = this.eloPlayer.wins;
        this.losses = this.eloPlayer.losses;
        this.winRate = Math.round((this.wins / (this.wins + this.losses)) * 100);
        this.replaceText();
        console.log(this.eloPlayer);
    })
    this.getEloIcon();
  }

  getColorElo() {
    return this.colorElo[this.color] || 'color-default';
  }

  replaceText() {
    this.rankType = this.rankType.replace("RANKED_SOLO_5x5", "Clasificatoria solo/dúo");
  }

  getEloIcon() {
    return this.eloIconImg[this.eloIcon]
  }
}
