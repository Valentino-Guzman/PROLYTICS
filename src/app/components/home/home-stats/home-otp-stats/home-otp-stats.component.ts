import { Component, Input } from '@angular/core';
import { HomeButtonStatsComponent } from "../home-button-stats/home-button-stats.component";
import { NgFor, NgIf } from '@angular/common';
import { OtpStats } from '../../../../interfaces/stats';

@Component({
  selector: 'app-home-otp-stats',
  imports: [HomeButtonStatsComponent, NgIf, NgFor],
  templateUrl: './home-otp-stats.component.html',
  styleUrl: './home-otp-stats.component.css'
})
export class HomeOtpStatsComponent {

  @Input() otp!: OtpStats[];
  @Input() championImageFixes!: Record<string, string>;
  @Input() getImageName!: (championName: string) => string;
  @Input() roles!: Record<string, string>;
  @Input() getRoleIcon!: (roles: string) => string;

}
