import { Component } from '@angular/core';
import { HeaderNavegationComponent } from "../header-navegation/header-navegation.component";
import { HeaderProfileComponent } from "../header-profile/header-profile.component";
import { HomeBrowserComponent } from "../../home/home-browser/home-browser.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-main',
  imports: [HeaderNavegationComponent, HeaderProfileComponent, CommonModule],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {
  
}
