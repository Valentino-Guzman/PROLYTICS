import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historial-stats-champion',
  imports: [],
  templateUrl: './historial-stats-champion.component.html',
  styleUrl: './historial-stats-champion.component.css'
})
export class HistorialStatsChampionComponent {
  @Input() p!: { championName: string, champLevel: number };
}
