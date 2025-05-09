import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMainComponent } from "./components/header/header-main/header-main.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderMainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoLCore';
}
