import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Champions } from '../../../../../interfaces/champions';
import { TierListChampionsButtonsComponent } from "../tier-list-champions-buttons/tier-list-champions-buttons.component";
import { TierListChampionsBrowserComponent } from '../tier-list-champions-browser/tier-list-champions-browser.component';

@Component({
  selector: 'app-tier-list-champion-header',
  imports: [TierListChampionsButtonsComponent, TierListChampionsBrowserComponent],
  templateUrl: './tier-list-champion-header.component.html',
  styleUrl: './tier-list-champion-header.component.css'
})
export class TierListChampionHeaderComponent {
  @Input() searchQuery!: string;
  @Input() champions: Champions[] = [];

  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() championSelected = new EventEmitter<Champions>();
  @Output() roleSelected = new EventEmitter<string>();

  onSearchQueryChange(value: string) {
    this.searchQuery = value;
    this.searchQueryChange.emit(value);
  }
}
