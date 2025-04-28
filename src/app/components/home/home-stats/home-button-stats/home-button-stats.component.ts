import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-button-stats',
  imports: [RouterModule],
  templateUrl: './home-button-stats.component.html',
  styleUrl: './home-button-stats.component.css'
})
export class HomeButtonStatsComponent {
  @Input() buttonLink: string = '';
}
