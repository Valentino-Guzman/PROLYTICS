import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ChampionStats } from '../../../../interfaces/stats';
import { ChampionsStatsService } from '../../../../services/champions-stats.service';
import { TierListChampionsBestSortingControlsComponent } from "../tier-list-champions-best-sorting-controls/tier-list-champions-best-sorting-controls.component";
import { SharedDataService } from '../../../../services/shared-data.service';
import { LoadingComponent } from "../../../loading-wrapper/loading/loading.component";

@Component({
  selector: 'app-tier-list-champions-best',
  imports: [NgFor, NgClass, TierListChampionsBestSortingControlsComponent, LoadingComponent],
  templateUrl: './tier-list-champions-best.component.html',
  styleUrl: './tier-list-champions-best.component.css'
})
export class TierListChampionsBestComponent {

  championsStats: ChampionStats[] = [];
  @Input() championImageFixes!: Record<string, string>
  tier: string = '';

  loading: boolean = true;

  sortKey: keyof ChampionStats = 'winrate';
  sortDirection: 'asc' | 'desc' = 'desc';

  constructor(
    private championStatsService: ChampionsStatsService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.sharedData.tierSource$.subscribe((tier) => {
      this.tier = tier;
      this.getChampionStats();
    });
  }

  getChampionStats() {
    this.loading = true;
    this.championStatsService.getChampionsStats(45, this.tier).subscribe({
      next: (data) => {
        this.championsStats = data;
        this.loading = false; 
      },
    });
  }
  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }

  onSortChanged(event: { key: keyof ChampionStats, direction: 'asc' | 'desc' }) {
    this.sortKey = event.key;
    this.sortDirection = event.direction;
    this.sortChampions();
  }

  sortChampions() {
    this.championsStats.sort((a, b) => {
      const valueA = a[this.sortKey];
      const valueB = b[this.sortKey];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  getTier() {
    this.sharedData.tierSource$.subscribe((data) => {
      this.tier = data;
    })
  }

}