import { Component, Input } from '@angular/core';
import { Participant } from '../../../../interfaces/player-stats';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-team-display',
  imports: [CommonModule, RouterModule],
  templateUrl: './team-display.component.html',
  styleUrl: './team-display.component.css'
})
export class TeamDisplayComponent {
  @Input() team: Participant[] = [];
}
