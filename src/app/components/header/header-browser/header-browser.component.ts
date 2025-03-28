import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../../services/account-service.service';
import { Account } from '../../../interfaces/account';
import { SharedDataService } from '../../../services/shared-data.service';
import { SummonerIconService } from '../../../services/summoner-icon.service';
import { Summoner } from '../../../interfaces/summoner';
import { PuuidService } from '../../../services/puuid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-browser',
  imports: [FormsModule],
  templateUrl: './header-browser.component.html',
  styleUrl: './header-browser.component.css'
})
export class HeaderBrowserComponent {
  name:string = '';
  gameName: string = '';
  hashtag: string = '';
  puuid: string = '';
  account: Account | null = null; 

  constructor(
    private accountService: AccountServiceService,
    private sharedData: SharedDataService,
    private puuidService: PuuidService,
    private router: Router
  ) {}

  browseAccount() {
    if (this.name.includes('#')) {
      this.gameName = this.name.split('#')[0];
      this.hashtag = this.name.split('#')[1];
    }
  
    this.accountService.gameName = this.gameName;
    this.accountService.hashtag = this.hashtag;
  
    this.accountService.getAccount().subscribe((data: Account) => {
      this.sharedData.setAccountData(data);
      console.log(data);
      
      this.puuidService.getPuuid().subscribe(
        (summoner: Summoner) => {
          this.puuid = summoner.puuid;
          console.log(this.puuid);
        },
        (error) => {
          console.error('Error al obtener el puuid:', error);
        }
      );
    });
    this.router.navigate(['/profile'])
    this.name = '';
  }
}
  

