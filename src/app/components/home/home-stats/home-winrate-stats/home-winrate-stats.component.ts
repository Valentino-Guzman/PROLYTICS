import { Component, Input, OnInit } from '@angular/core';
import { ChampionStats } from '../../../../interfaces/stats';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-winrate-stats',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './home-winrate-stats.component.html',
  styleUrl: './home-winrate-stats.component.css'
})
export class HomeWinrateStatsComponent {

  @Input() champions!: ChampionStats[];
  @Input() championImageFixes!: Record<string, string>;
  @Input() roles!: Record<string, string>;
  @Input() getImageName!: (championName: string) => string;
  @Input() getRoleIcon!: (roles: string) => string;
  @Input() getPickRate!: (games: number) => number;
  @Input() getTier!: (winrate: number, games: number) => string;

}
