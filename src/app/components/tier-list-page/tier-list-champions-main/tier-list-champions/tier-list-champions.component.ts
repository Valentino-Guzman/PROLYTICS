import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChampionsNameService } from '../../../../services/champions-name.service';
import { Champions } from '../../../../interfaces/champions';
import { LoadingComponent } from "../../../loading-wrapper/loading/loading.component";
import { FormsModule } from '@angular/forms';
import { TierListChampionsButtonsComponent } from "../tier-list-champions-buttons/tier-list-champions-buttons.component";
import { TierListChampionsBrowserComponent } from "../tier-list-champions-browser/tier-list-champions-browser.component";

@Component({
  selector: 'app-tier-list-champions',
  imports: [NgFor, NgIf, NgOptimizedImage, LoadingComponent, FormsModule, TierListChampionsButtonsComponent, TierListChampionsBrowserComponent],
  templateUrl: './tier-list-champions.component.html',
  styleUrl: './tier-list-champions.component.css'
})
export class TierListChampionsComponent implements OnInit {
  
  @Input() championImageFixes!: Record<string, string>
  championsName: Champions[] = [];
  searchQuery: string = '';
  selectedRole: string = 'ALL';
  loading: boolean = false;
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
      this.loading = false;
    })
  }

  getImageName(championName: string): string {
    return this.championImageFixes[championName] || championName;
  }

  onChampionSelected(champion: Champions) {
    console.log('Seleccionado:', champion);
  }

  onRoleSelected(role: string) {
    this.selectedRole = role;
  }

  getFilteredChampions(): Champions[] {
    return this.championsName.filter(champion =>
      champion.championName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedRole === 'ALL' || champion.role === this.selectedRole)
    );
  }

  getChampionsByLetterAndRole(letter: string): Champions[] {
    return this.getFilteredChampions().filter(champion =>
      champion.championName.startsWith(letter)
    );
  }
}
