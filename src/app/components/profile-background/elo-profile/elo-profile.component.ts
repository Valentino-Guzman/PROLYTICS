import { Component, OnInit } from '@angular/core';
import { EloPlayerService } from '../../../services/elo-player.service';
import { EloPlayer } from '../../../interfaces/elo-player';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-elo-profile',
  imports: [CommonModule],
  templateUrl: './elo-profile.component.html',
  styleUrl: './elo-profile.component.css'
})
export class EloProfileComponent implements OnInit {
  eloPlayers: EloPlayer[] = [];
  colorElo: Record<string, string> = {
    'UNRANKED': 'unranked', 'IRON': 'iron', 'BRONZE': 'bronze', 'SILVER': 'silver',
    'GOLD': 'gold', 'PLATINUM': 'platinum', 'EMERALD': 'emerald', 'DIAMOND': 'diamond',
    'MASTER': 'master', 'GRANDMASTER': 'grandmaster', 'CHALLENGER': 'challenger'
  };
  eloIconImg: Record<string, string> = {
    'UNRANKED': '', 'IRON': 'webp/profile/iron.png', 'BRONZE': 'webp/profile/bronze.png',
    'SILVER': 'webp/profile/silver.png', 'GOLD': 'webp/profile/gold.png',
    'PLATINUM': 'webp/profile/platinum.png', 'EMERALD': 'webp/profile/emerald.png',
    'DIAMOND': 'webp/profile/diamond.png', 'MASTER': 'webp/profile/master.png',
    'GRANDMASTER': 'webp/profile/grandmaster.png', 'CHALLENGER': 'webp/profile/challenger.png'
  };

  constructor(private eloPlayerService: EloPlayerService) {}

  ngOnInit() {
    this.eloPlayerService.getEloPlayer().subscribe(data => {
      this.eloPlayers = data.map(player => ({
        ...player,
        queueType: player.queueType
          .replace("RANKED_SOLO_5x5", "Clasificatoria solo/dúo")
          .replace("RANKED_FLEX_SR", "Clasificatoria flexible"),
        winrate: Math.round((player.wins / (player.wins + player.losses)) * 100)
      })).sort((a, b) => a.queueType === "Clasificatoria solo/dúo" ? -1 : 1);
    });
  }

  getColorElo(tier: string): string {
    return this.colorElo[tier] || 'color-default';
  }

  getEloIcon(tier: string): string {
    return this.eloIconImg[tier] || '';
  }
}
