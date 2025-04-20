import { Component } from '@angular/core';
import { HomeBrowserComponent } from "../home-browser/home-browser.component";

@Component({
  selector: 'app-home',
  imports: [HomeBrowserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
