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
    'UNRANKED': '', 'IRON': 'webp/profile/iron.webp', 'BRONZE': 'webp/profile/bronze.webp',
    'SILVER': 'webp/profile/silver.webp', 'GOLD': 'webp/profile/gold.webp',
    'PLATINUM': 'webp/profile/platinum.webp', 'EMERALD': 'webp/profile/emerald.webp',
    'DIAMOND': 'webp/profile/diamond.webp', 'MASTER': 'webp/profile/master.webp',
    'GRANDMASTER': 'webp/profile/grandmaster.webp', 'CHALLENGER': 'webp/profile/challenger.webp'
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
      })).sort((a) => a.queueType === "Clasificatoria solo/dúo" ? -1 : 1);
    });
  }

  getColorElo(tier: string): string {
    return this.colorElo[tier] || 'color-default';
  }

  getEloIcon(tier: string): string {
    return this.eloIconImg[tier] || '';
  }
}
