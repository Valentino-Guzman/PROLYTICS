import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ChampionsNameService } from '../../../services/champions-name.service';
import { Champions } from '../../../interfaces/champions';

@Component({
  selector: 'app-tier-list-champions',
  imports: [NgFor],
  templateUrl: './tier-list-champions.component.html',
  styleUrl: './tier-list-champions.component.css'
})
export class TierListChampionsComponent implements OnInit {

  championsName: Champions[] = [];
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(
    private champions: ChampionsNameService
  ) {}

  ngOnInit() {
    this.getAllChampions();
  }

  getAllChampions() {
    this.champions.getAllChampions().subscribe((data) => {
      this.championsName = data;
    })
  }

  getChampionsByLetter(letter: string) {
    return this.championsName.filter(champion => champion.championName.startsWith(letter));
  }

}
