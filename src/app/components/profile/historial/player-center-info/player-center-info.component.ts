import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-center-info',
  imports: [CommonModule],
  templateUrl: './player-center-info.component.html',
  styleUrl: './player-center-info.component.css'
})
export class PlayerCenterInfoComponent {
  @Input() championName!: string;
  @Input() items: string[] | undefined;
  @Input() kda!: { kills: number; deaths: number; assists: number };
  @Input() win!: string;
}
