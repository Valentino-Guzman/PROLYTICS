import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RunesReforgedService } from '../../../../../services/runes-reforged.service';
import { Participant, StatPerks, Styles } from '../../../../../interfaces/player-stats';

@Component({
  selector: 'app-historial-stats-runes',
  imports: [CommonModule],
  templateUrl: './historial-stats-runes.component.html',
  styleUrl: './historial-stats-runes.component.css'
})
export class HistorialStatsRunesComponent {
  @Input() p!: { statPerks: StatPerks; styles: Styles[] } ;
  showTooltip = false;

  constructor(public runesService: RunesReforgedService) {}
}
