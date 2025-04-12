import { Component, Input } from '@angular/core';
import { SummonerSpellService } from '../../../../../services/summoner-spell.service';

@Component({
  selector: 'app-historial-stats-spells',
  imports: [],
  templateUrl: './historial-stats-spells.component.html',
  styleUrl: './historial-stats-spells.component.css'
})
export class HistorialStatsSpellsComponent {
  
  @Input() p!: { summoner1Id: number, summoner2Id: number };

  constructor(public spellService: SummonerSpellService) {}

}
