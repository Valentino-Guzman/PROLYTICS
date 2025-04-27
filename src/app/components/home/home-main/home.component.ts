import { Component } from '@angular/core';
import { HomeBrowserComponent } from "../home-browser/home-browser.component";
import { HomeStatsMainComponent } from "../home-stats/home-stats-main/home-stats-main.component";


@Component({
  selector: 'app-home',
  imports: [HomeBrowserComponent, HomeStatsMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
