import { Component, OnInit } from '@angular/core';
import { MasteryChampionsService } from '../../../services/mastery-champions.service';
import { Mastery } from '../../../interfaces/mastery';
import { CommonModule } from '@angular/common';
import { ChampionService } from '../../../services/champions.service';

@Component({
  selector: 'app-champion-maestry',
  imports: [CommonModule],
  templateUrl: './champion-maestry.component.html',
  styleUrl: './champion-maestry.component.css'
})
export class ChampionMasteryComponent implements OnInit{

  masteryChampions: Mastery[] = [];

  constructor(
    private championMastery:MasteryChampionsService,
    private champions: ChampionService
  ) {}

  
  ngOnInit() {
    this.champions.loadChampions().then(() => {
      this.championMastery.getChampionMastery().subscribe((data: Mastery[]) => {
        this.masteryChampions = data;
        console.log(this.masteryChampions, 'maestria');
        });
      }
    );
  }

  getChampionId(id: number): string {
    return this.champions.getChampionNameById(id);
  }
}
