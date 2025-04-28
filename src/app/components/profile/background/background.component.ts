import { Component } from '@angular/core';
import { SummonerProfileComponent } from "../summoner-profile/summoner-profile.component";
import { EloProfileComponent } from "../elo-profile/elo-profile.component";
import { ChampionsComponent } from "../champions/champions.component";
import { HistorialPlayerComponent } from '../historial/historial-player-component/historial-player.component';
import { ChampionMasteryComponent } from "../champion-maestry/champion-maestry.component";

@Component({
  selector: 'app-background',
  imports: [SummonerProfileComponent, EloProfileComponent, HistorialPlayerComponent, ChampionsComponent, ChampionMasteryComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

}