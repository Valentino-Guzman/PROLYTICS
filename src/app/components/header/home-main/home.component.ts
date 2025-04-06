import { Component } from '@angular/core';
import { HeaderMainComponent } from "../../header/header-main/header-main.component";
import { ProfileBgMainComponent } from "../../profile-background/profile-bg-main/profile-bg-main.component";

@Component({
  selector: 'app-home',
  imports: [HeaderMainComponent, ProfileBgMainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
