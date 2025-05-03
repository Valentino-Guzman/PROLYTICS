import { NgClass, NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tier-list-champions-filter-elo',
  imports: [NgFor, NgClass],
  templateUrl: './tier-list-champions-filter-elo.component.html',
  styleUrl: './tier-list-champions-filter-elo.component.css'
})
export class TierListChampionsFilterEloComponent {

  tiers = [
    { value: 'CHALLENGER', label: 'Challenger', icon: 'svg/elo/challenger.svg' },
    { value: 'GRANDMASTER', label: 'Grandmaster', icon: 'svg/elo/grandmaster.svg' },
    { value: 'MASTER', label: 'Master', icon: 'svg/elo/master.svg' },
    { value: 'EMERALD', label: 'Emerald', icon: 'svg/elo/emerald.svg' },
    { value: 'DIAMOND', label: 'Diamond', icon: 'svg/elo/diamond.svg' },
    { value: 'PLATINUM', label: 'Platinum', icon: 'svg/elo/platinum.svg' },
    { value: 'GOLD', label: 'Gold', icon: 'svg/elo/gold.svg' },
    { value: 'SILVER', label: 'Silver', icon: 'svg/elo/silver.svg' },
    { value: 'BRONZE', label: 'Bronze', icon: 'svg/elo/bronze.svg' },
    { value: 'IRON', label: 'Iron', icon: 'svg/elo/iron.svg' }
  ];

  regions = [
    { value: 'LAS', label: 'LAS', icon: 'svg/regions/LAS.svg'},
    { value: 'EUW', label: 'EUW', icon: 'svg/regions/EUW.svg'},
    { value: 'NA', label: 'NA', icon: 'svg/regions/NA.svg'},
  ];


  selectedTier = this.tiers[0];
  selectedRegion = this.regions[0];

  selectTier(tier: any) {
    this.selectedTier = tier;
  }

  selectRegion(region: any) {
    this.selectedRegion = region;
  }

  optionsVisible: boolean = false;

    toggleOptions(): void {
        this.optionsVisible = !this.optionsVisible;
    }

}
