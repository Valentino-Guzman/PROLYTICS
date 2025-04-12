import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../../../interfaces/player-stats';
import { RunesReforgedService } from '../../../../../services/runes-reforged.service';
import { SummonerSpellService } from '../../../../../services/summoner-spell.service';
import { HistorialStatsRunesComponent } from "../historial-stats-runes/historial-stats-runes.component";
import { HistorialStatsSpellsComponent } from "../historial-stats-spells/historial-stats-spells.component";
import { HistorialStatsDamageBarComponent } from "../historial-stats-damage-bar/historial-stats-damage-bar.component";
import { HistorialStatsChampionComponent } from "../historial-stats-champion/historial-stats-champion.component";
import { HistorialStatsItemsComponent } from "../historial-stats-items/historial-stats-items.component";


@Component({
  selector: 'app-historial-stats-display',
  imports: [CommonModule, HistorialStatsRunesComponent, HistorialStatsSpellsComponent, HistorialStatsDamageBarComponent, HistorialStatsChampionComponent, HistorialStatsItemsComponent],
  templateUrl: './historial-stats-display.component.html',
  styleUrl: './historial-stats-display.component.css'
})
export class HistorialStatsDisplayComponent {
  
  @Input() isRotated: boolean = false;
  @Input() team: Participant[] = [];
  @Input() puuid: string = '';
  itemMap: { [puuid: string]: (string | null)[] } = {};

  constructor(
    public runesService: RunesReforgedService,
    public spellService: SummonerSpellService
  ) {}

  async ngOnInit() {
    await this.runesService.loadRunes();
    await this.spellService.loadSummonerSpells();
    this.setItems();
  }

  setItems() {
    this.team.forEach(p => {
      const items: (string | null)[] = [];
  
      for (let i = 0; i <= 6; i++) {
        const itemId = (p as any)[`item${i}`];
        items.push(itemId && itemId !== 0 ? String(itemId) : null);
      }
      
      this.itemMap[p.puuid] = items;
    });
  }
}
