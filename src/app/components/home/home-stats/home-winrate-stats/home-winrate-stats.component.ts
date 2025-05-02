import { Component, Input, OnInit } from '@angular/core';
import { ChampionStats } from '../../../../interfaces/stats';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { HomeButtonStatsComponent } from "../home-button-stats/home-button-stats.component";

@Component({
  selector: 'app-home-winrate-stats',
  imports: [NgIf, NgFor, NgClass, HomeButtonStatsComponent],
  templateUrl: './home-winrate-stats.component.html',
  styleUrl: './home-winrate-stats.component.css'
})
export class HomeWinrateStatsComponent {

  @Input() champions!: ChampionStats[];
  @Input() championImageFixes!: Record<string, string>;
  @Input() roles!: Record<string, string>;
  @Input() getImageName!: (championName: string) => string;
  @Input() getRoleIcon!: (roles: string) => string;

}
