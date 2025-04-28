import { Component } from '@angular/core';
import { TierListChampionsComponent } from "../tier-list-champions/tier-list-champions.component";
import { TierListChampionsStatsComponent } from "../tier-list-champions-stats/tier-list-champions-stats.component";

@Component({
  selector: 'app-tier-list-main',
  imports: [TierListChampionsStatsComponent],
  templateUrl: './tier-list-main.component.html',
  styleUrl: './tier-list-main.component.css'
})
export class TierListMainComponent {
  
}
