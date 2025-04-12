import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historial-stats-items',
  imports: [CommonModule],
  templateUrl: './historial-stats-items.component.html',
  styleUrl: './historial-stats-items.component.css'
})
export class HistorialStatsItemsComponent {
  @Input() items: (string | null)[] = [];
}
