import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historial-stats-damage-bar',
  imports: [CommonModule],
  templateUrl: './historial-stats-damage-bar.component.html',
  styleUrl: './historial-stats-damage-bar.component.css'
})
export class HistorialStatsDamageBarComponent {
  @Input() p!: { totalDamageDealtToChampions: number, totalDamageTaken: number}

  getBarWidth(value: number | string): number {
    const dealt = Number(this.p.totalDamageDealtToChampions);
    const taken = Number(this.p.totalDamageTaken);
    const max = Math.max(dealt, taken);
    return (Number(value) / max) * 100;
  }
}
