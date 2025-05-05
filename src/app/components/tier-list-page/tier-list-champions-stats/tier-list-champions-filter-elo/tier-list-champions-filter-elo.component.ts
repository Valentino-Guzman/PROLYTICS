import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SharedDataService } from '../../../../services/shared-data.service';

@Component({
  selector: 'app-tier-list-champions-filter-elo',
  imports: [NgFor, NgClass],
  templateUrl: './tier-list-champions-filter-elo.component.html',
  styleUrl: './tier-list-champions-filter-elo.component.css'
})
export class TierListChampionsFilterEloComponent {

  constructor(private sharedData: SharedDataService) {}

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
    this.sharedData.setTier(tier.value);
    this.optionsVisibleTier = false; 
  }

  selectRegion(region: any) {
    this.selectedRegion = region;
    this.optionsVisibleRegion = false;
  }

  optionsVisibleTier = false;
  optionsVisibleRegion = false;

  toggleTierOptions() {
    this.optionsVisibleTier = !this.optionsVisibleTier;
    if (this.optionsVisibleTier) this.optionsVisibleRegion = false;
  }

  toggleRegionOptions() {
    this.optionsVisibleRegion = !this.optionsVisibleRegion;
    if (this.optionsVisibleRegion) this.optionsVisibleTier = false;
  }

}
