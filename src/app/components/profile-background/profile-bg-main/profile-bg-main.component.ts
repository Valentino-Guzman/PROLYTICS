import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { ChampionsProfileService } from '../../../services/matches-profile.service';
import { PuuidService } from '../../../services/puuid.service';
import { SharedDataService } from '../../../services/shared-data.service';
import { AccountServiceService } from '../../../services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { Summoner } from '../../../interfaces/summoner';
import { Account } from '../../../interfaces/account';

@Component({
  selector: 'app-profile-bg-main',
  imports: [BackgroundComponent],
  templateUrl: './profile-bg-main.component.html',
  styleUrl: './profile-bg-main.component.css'
})
export class ProfileBgMainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountServiceService,
    private sharedData: SharedDataService,
    private puuidService: PuuidService,
    private matchesProfile: ChampionsProfileService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id || !id.includes('-')) return;

      const [gameName, hashtag] = id.split('-');
      this.accountService.gameName = gameName;
      this.accountService.hashtag = hashtag;

      if (this.sharedData.hasAccountData()) return;

      this.accountService.getAccount().subscribe((accountData: Account) => {
        this.sharedData.setAccountData(accountData);

        this.puuidService.getPuuid().subscribe((summonerData: Summoner) => {
          this.sharedData.setPuuid(summonerData.puuid);

          this.matchesProfile.getMatchesProfile().subscribe((matches) => {
            this.sharedData.setMatches(matches);
          });
        });
      });
    });
  } 
}
