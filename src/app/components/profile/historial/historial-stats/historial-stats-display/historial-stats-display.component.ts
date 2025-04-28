import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../../../interfaces/player-stats';
import { RunesReforgedService } from '../../../../../services/runes-reforged.service';
import { SummonerSpellService } from '../../../../../services/summoner-spell.service';
import { HistorialStatsRunesComponent } from "../historial-stats-runes/historial-stats-runes.component";
import { HistorialStatsSpellsComponent } from "../historial-stats-spells/historial-stats-spells.component";
import { HistorialStatsDamageBarComponent } from "../historial-stats-damage-bar/historial-stats-damage-bar.component";
import { HistorialStatsChampionComponent } from "../historial-stats-champion/historial-stats-champion.component";
import { HistorialStatsItemsComponent } from "../historial-stats-items/historial-stats-items.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-historial-stats-display',
  imports: [CommonModule, HistorialStatsRunesComponent, HistorialStatsSpellsComponent, HistorialStatsDamageBarComponent, HistorialStatsChampionComponent, HistorialStatsItemsComponent, RouterModule],
  templateUrl: './historial-stats-display.component.html',
  styleUrl: './historial-stats-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HistorialStatsDisplayComponent {
  
  @Input() isRotated: boolean = false;
  @Input() team: Participant[] = [];
  @Input() puuid: string = '';
  @Input() duration: string = '';
  itemMap: { [puuid: string]: (string | null)[] } = {};

  constructor(
    public runesService: RunesReforgedService,
    public spellService: SummonerSpellService,
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

  parseDuration(durationStr: string): number {
    const clean = durationStr.replace(' min', '');
    const match = clean.match(/^(\d+):(\d+)$/);
  
    if (!match) return 0;
  
    const minutes = parseInt(match[1], 10);
    const seconds = parseInt(match[2], 10);
  
    return minutes * 60 + seconds;
  }
  
  getCsPerMinute(p: Participant): string {
    const durationInSeconds = this.parseDuration(this.duration);
  
    const cs = p.totalMinionsKilled + p.neutralMinionsKilled;
    const minutes = durationInSeconds / 60;
    const csPerMin = cs / minutes;
  
    return csPerMin.toFixed(2);
  }

}