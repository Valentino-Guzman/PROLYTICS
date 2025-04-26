import { Component } from '@angular/core';
import { HomeBrowserComponent } from "../home-browser/home-browser.component";
import { HomeWinrateStatsComponent } from "../home-winrate-stats/home-winrate-stats.component";

@Component({
  selector: 'app-home',
  imports: [HomeBrowserComponent, HomeWinrateStatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
