import { Component } from '@angular/core';
import { TierListChampionsComponent } from '../../tier-list-champions/tier-list-champions-main/tier-list-champions.component';
import { TierListChampionsBestComponent } from "../tier-list-champions-best/tier-list-champions-best.component";
import { LoadingComponent } from "../../../loading-wrapper/loading/loading.component";
import { TierListChampionsFilterEloComponent } from "../tier-list-champions-filter-elo/tier-list-champions-filter-elo.component";

@Component({
  selector: 'app-tier-list-champions-stats',
  imports: [TierListChampionsComponent, TierListChampionsBestComponent, LoadingComponent, TierListChampionsFilterEloComponent],
  templateUrl: './tier-list-champions-stats.component.html',
  styleUrl: './tier-list-champions-stats.component.css'
})
export class TierListChampionsStatsComponent {

  loading: boolean = true;
  childrenLoading: boolean[] = [true, true];

  championImageFixes: Record<string, string> = {  
    "Kai'Sa": 'Kaisa',
    "Wukong": 'MonkeyKing',
    "LeBlanc": 'Leblanc',
    "Nunu & Willump": 'Nunu',
    "Renata Glasc": 'Renata',
    "Cho'Gath": 'Chogath',
    "Kha'Zix": 'Khazix',
    "Vel'Koz": 'Velkoz',
    "Rek'Sai": 'RekSai',
    "Bel'Veth": 'Belveth',
    "Kog'Maw": 'KogMaw',
    "K'Sante":'KSante',
    "Dr. Mundo": 'DrMundo',
    "Lee Sin": 'LeeSin',
    "Jarvan IV": 'JarvanIV',
    "Miss Fortune": 'MissFortune',
    "Xin Zhao": 'XinZhao',
    "Aurelion Sol": 'AurelionSol',
    "Tahm Kench": 'TahmKench',
    "Master Yi": 'MasterYi',
    "Twisted Fate": 'TwistedFate'
  };

  onChildLoadingChange(isLoading: boolean, index: number) {
    console.log(`Evento recibido desde el hijo: loadingChange = ${isLoading} en el índice ${index}`);
    this.childrenLoading[index] = isLoading;
    this.loading = this.childrenLoading.every(val => !val);

  }

}
