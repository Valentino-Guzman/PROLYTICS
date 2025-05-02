import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ChampionStats } from '../../../../interfaces/stats';

@Component({
  selector: 'app-tier-list-champions-best-sorting-controls',
  imports: [NgIf, NgClass],
  templateUrl: './tier-list-champions-best-sorting-controls.component.html',
  styleUrl: './tier-list-champions-best-sorting-controls.component.css'
})
export class TierListChampionsBestSortingControlsComponent {

  sortKey: keyof ChampionStats = 'winrate';
  sortDirection: 'asc' | 'desc' = 'desc';

  @Output() sortChanged = new EventEmitter<{ key: keyof ChampionStats, direction: 'asc' | 'desc' }>();

  onSortChange(key: keyof ChampionStats) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'desc';
      this.sortKey = key;
    }
    this.sortChanged.emit({ key: this.sortKey, direction: this.sortDirection });
  }
}
