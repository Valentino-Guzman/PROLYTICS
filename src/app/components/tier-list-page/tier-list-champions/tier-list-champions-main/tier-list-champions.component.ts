import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChampionsNameService } from '../../../../services/champions-name.service';
import { Champions } from '../../../../interfaces/champions';
import { LoadingComponent } from "../../../loading-wrapper/loading/loading.component";
import { FormsModule } from '@angular/forms';
import { TierListChampionHeaderComponent } from '../tier-list-champion-header-main/tier-list-champion-header/tier-list-champion-header.component';
import { delay } from 'rxjs';


@Component({
  selector: 'app-tier-list-champions',
  imports: [NgFor, NgIf, NgOptimizedImage, FormsModule, TierListChampionHeaderComponent],
  templateUrl: './tier-list-champions.component.html',
  styleUrl: './tier-list-champions.component.css'
})
export class TierListChampionsComponent implements OnInit {
  
  @Input() championImageFixes!: Record<string, string>
  championsName: Champions[] = [];
  searchQuery: string = '';
  selectedRole: string = 'ALL';

  loading: boolean = true;
  
  @Output() loadingChange = new EventEmitter<boolean>();
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(
    private champions: ChampionsNameService
  ) {}

  ngOnInit() {
    this.getAllChampions();
  }

  getAllChampions() {
    this.champions.getAllChampions().subscribe((data) => {
      this.championsName = data;
      this.loadingChange.emit(false);
      this.loading = false;
    })
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }

  onRoleSelected(role: string) {
    this.selectedRole = role;
  }

  getFilteredChampions(): Champions[] {
    return this.championsName.filter(champion =>
      champion.championName.toLowerCase().startsWith(this.searchQuery.toLowerCase()) &&
      (this.selectedRole === 'ALL' || champion.role === this.selectedRole)
    );
  }

  getChampionsByLetterAndRole(letter: string): Champions[] {
    return this.getFilteredChampions().filter(champion =>
      champion.championName.startsWith(letter)
    );
  }

  hasChampionsToShow(): boolean {
    return this.letters.some(letter => this.getChampionsByLetterAndRole(letter).length > 0);
  }
}
