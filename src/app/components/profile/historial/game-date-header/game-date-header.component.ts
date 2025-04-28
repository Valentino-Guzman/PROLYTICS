import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-date-header',
  imports: [],
  templateUrl: './game-date-header.component.html',
  styleUrl: './game-date-header.component.css'
})
export class GameDateHeaderComponent {
  @Input() date: string | undefined;
}
