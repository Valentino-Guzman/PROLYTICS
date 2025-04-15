import { Component, Input } from '@angular/core';
import { Participant } from '../../../../interfaces/player-stats';
import { GameDateHeaderComponent } from "../game-date-header/game-date-header.component";
import { MatchSummaryCardComponent } from "../match-summary-card/match-summary-card.component";
import { PlayerCenterInfoComponent } from "../player-center-info/player-center-info.component";
import { TeamDisplayComponent } from "../team-display/team-display.component";
import { CommonModule } from '@angular/common';
import { DisplayHistorialButtonComponent } from "../display-historial-button/display-historial-button.component";
import { HistorialStatsDisplayComponent } from "../historial-stats/historial-stats-display/historial-stats-display.component";
import { EloPlayer } from '../../../../interfaces/elo-player';

@Component({
  selector: 'app-historial-player-item',
  imports: [CommonModule, GameDateHeaderComponent, MatchSummaryCardComponent, PlayerCenterInfoComponent, TeamDisplayComponent, DisplayHistorialButtonComponent, HistorialStatsDisplayComponent],
  templateUrl: './historial-player-item.component.html',
  styleUrl: './historial-player-item.component.css'
})
export class HistorialPlayerItemComponent {
  @Input() playerInfo!: Participant;
  @Input() gameType!: string;
  @Input() index!: number;
  @Input() isSameDate!: boolean;
  @Input() convertGameDuration!: (seconds: number, csPerMin?: number) => string;
  @Input() allies: Participant[] = [];
  @Input() enemies: Participant[] = [];
  @Input() isRotated: boolean = false;

  toggleHistorial() {
    this.isRotated = !this.isRotated;
  }
}
