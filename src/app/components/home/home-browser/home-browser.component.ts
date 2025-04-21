import { Component } from '@angular/core';
import { Account } from '../../../interfaces/account';
import { Router } from '@angular/router';
import { Summoner } from '../../../interfaces/summoner';
import { AccountServiceService } from '../../../services/account-service.service';
import { ChampionsProfileService } from '../../../services/matches-profile.service';
import { PuuidService } from '../../../services/puuid.service';
import { SharedDataService } from '../../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-browser',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-browser.component.html',
  styleUrl: './home-browser.component.css'
})
export class HomeBrowserComponent {
  name:string = '';
  gameName: string = '';
  hashtag: string = '';
  puuid: string = '';
  account: Account | null = null;
  nameSave: string = '';
  isSearching: boolean = false; 
  
  constructor(
    private accountService: AccountServiceService,
    private sharedData: SharedDataService,
    private puuidService: PuuidService,
    private matchesProfile: ChampionsProfileService,
    private router: Router,
  ) {}

  browseAccount() {
    if (!this.name.includes('#')) return;

    if (this.name.includes('#')) {
      this.gameName = this.name.split('#')[0];
      this.hashtag = this.name.split('#')[1];
    }
  
    this.accountService.gameName = this.gameName;
    this.accountService.hashtag = this.hashtag;
    this.nameSave = (`${this.gameName}-${this.hashtag}`);

    this.accountService.getAccount().subscribe((data: Account) => {
      this.sharedData.setAccountData(data);
      console.log(data);

      this.puuidService.getPuuid().subscribe((summoner: Summoner) => {
          this.puuid = summoner.puuid;
          console.log(this.puuid);
        },
      );

      this.matchesProfile.getMatchesProfile().subscribe((data) => {
        this.sharedData.setMatches(data);
        console.log('matches:', data)
      })
  
    });
    this.router.navigate(['/profile', this.nameSave])
    this.name = '';
  }

}
