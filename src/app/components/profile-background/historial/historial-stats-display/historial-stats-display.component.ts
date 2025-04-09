import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Participant } from '../../../../interfaces/player-stats';


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
