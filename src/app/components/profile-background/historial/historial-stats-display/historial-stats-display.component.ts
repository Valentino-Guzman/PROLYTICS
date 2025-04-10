import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../../interfaces/player-stats';
import { RunesReforgedService } from '../../../../services/runes-reforged.service';
import { SummonerSpellService } from '../../../../services/summoner-spell.service';


@Component({
  selector: 'app-historial-stats-display',
  imports: [CommonModule],
  templateUrl: './historial-stats-display.component.html',
  styleUrl: './historial-stats-display.component.css'
})
export class HistorialStatsDisplayComponent {
  
  @Input() isRotated: boolean = false;
  @Input() team: Participant[] = [];
  @Input() puuid: string = '';

  constructor(
    public runesService: RunesReforgedService,
    public spellService: SummonerSpellService
  ) {}

  async ngOnInit() {
    await this.runesService.loadRunes();
    await this.spellService.loadSummonerSpells();

  }

  getBarWidth(value: number | string): number {
    const max = Math.max(
      ...this.team.map(p => Math.max(
        Number(p.totalDamageDealtToChampions),
        Number(p.totalDamageTaken)
      ))
    );
    return (Number(value) / max) * 100;
  }
}
