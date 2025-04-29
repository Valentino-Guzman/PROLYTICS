import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Champions } from '../../../../../interfaces/champions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tier-list-champions-browser',
  imports: [FormsModule],
  templateUrl: './tier-list-champions-browser.component.html',
  styleUrl: './tier-list-champions-browser.component.css'
})
export class TierListChampionsBrowserComponent {

  @Input() champions: Champions[] = [];
  @Input() searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() championSelected = new EventEmitter<Champions>();

  onSearchChange(value: string) {
    this.searchQuery = value;
    this.searchQueryChange.emit(value);
  }

  selectChampion(champion: Champions) {
    this.championSelected.emit(champion);
  }

}
