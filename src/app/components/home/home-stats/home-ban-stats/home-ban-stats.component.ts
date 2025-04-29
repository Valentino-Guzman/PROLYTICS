import { Component, Input } from '@angular/core';
import { BanStats } from '../../../../interfaces/stats';
import { CommonModule } from '@angular/common';
import { HomeButtonStatsComponent } from "../home-button-stats/home-button-stats.component"; 

@Component({
  selector: 'app-home-ban-stats',
  imports: [CommonModule, HomeButtonStatsComponent],
  templateUrl: './home-ban-stats.component.html',
  styleUrl: './home-ban-stats.component.css'
})
export class HomeBanStatsComponent {

  @Input() bans!: BanStats[];
  @Input() championImageFixes!: Record<string, string>;
  @Input() roles!: Record<string, string>;
  @Input() getImageName!: (championName: string) => string;

}
