import { Component } from '@angular/core';
import { SummonerProfileComponent } from "../summoner-profile/summoner-profile.component";
import { EloProfileComponent } from "../elo-profile/elo-profile.component";
import { ChampionsComponent } from "../champions/champions.component";
import { HistorialPlayerComponent } from "../historial-player/historial-player.component";
import { ChampionProfileComponent } from "../champion-profile/champion-profile.component";

@Component({
  selector: 'app-background',
  imports: [SummonerProfileComponent, EloProfileComponent, HistorialPlayerComponent, ChampionsComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

}
