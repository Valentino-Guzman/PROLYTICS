import { Component } from '@angular/core';
import { HeaderBrowserComponent } from "../header-browser/header-browser.component";
import { HeaderNavegationComponent } from "../header-navegation/header-navegation.component";
import { HeaderProfileComponent } from "../header-profile/header-profile.component";

@Component({
  selector: 'app-header-main',
  imports: [HeaderBrowserComponent, HeaderNavegationComponent, HeaderProfileComponent],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {
  
}
