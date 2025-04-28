import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-match-summary-card',
  imports: [CommonModule],
  templateUrl: './match-summary-card.component.html',
  styleUrl: './match-summary-card.component.css'
})
export class MatchSummaryCardComponent {
  @Input() win: string = '';
  @Input() gameType: string = '';
  @Input() duration: string = '';
}
