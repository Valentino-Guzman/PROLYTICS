import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChampionStats } from '../../../../interfaces/stats';
import { ChampionsStatsService } from '../../../../services/champions-stats.service';

@Component({
  selector: 'app-tier-list-champions-best',
  imports: [NgFor],
  templateUrl: './tier-list-champions-best.component.html',
  styleUrl: './tier-list-champions-best.component.css'
})
export class TierListChampionsBestComponent {

  championsStats: ChampionStats[] = [];
  @Input() championImageFixes!: Record<string, string>

  constructor(
    private championStatsService: ChampionsStatsService,
  ) {}

  ngOnInit() {
   this.getChampionStats();
  }

  getChampionStats() {
    this.championStatsService.getChampionsStats(50).subscribe((data) => {
      this.championsStats = data;
      console.log(this.championsStats);
    });
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }
}
