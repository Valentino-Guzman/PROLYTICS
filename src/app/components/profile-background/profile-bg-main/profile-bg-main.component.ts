import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { ChampionsProfileService } from '../../../services/matches-profile.service';
import { PuuidService } from '../../../services/puuid.service';
import { SharedDataService } from '../../../services/shared-data.service';
import { AccountServiceService } from '../../../services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { Summoner } from '../../../interfaces/summoner';
import { Account } from '../../../interfaces/account';
import { Mastery } from '../../../interfaces/mastery';
import { MasteryChampionsService } from '../../../services/mastery-champions.service';
import { ChampionService } from '../../../services/champions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-bg-main',
  imports: [BackgroundComponent, CommonModule],
  templateUrl: './profile-bg-main.component.html',
  styleUrl: './profile-bg-main.component.css'
})
export class ProfileBgMainComponent implements OnInit {

  champion: string = '';
  championInfo: Mastery[] = [];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountServiceService,
    private sharedData: SharedDataService,
    private puuidService: PuuidService,
    private matchesProfile: ChampionsProfileService,
    private championMastery: MasteryChampionsService,
    private champions: ChampionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id || !id.includes('-')) return;

      const [gameName, hashtag] = id.split('-');
      this.accountService.gameName = gameName;
      this.accountService.hashtag = hashtag;

      this.accountService.getAccount().subscribe((accountData: Account) => {
        this.sharedData.setAccountData(accountData);

        this.puuidService.getPuuid().subscribe((summonerData: Summoner) => {
          this.sharedData.setPuuid(summonerData.puuid);

          this.matchesProfile.getMatchesProfile().subscribe((matches) => {
            this.sharedData.setMatches(matches);
          });

          this.champions.loadChampions().then(() => {
            this.championMastery.getChampionMastery().subscribe((data: Mastery[]) => {
              this.championInfo[0] = data[0];
              });
            }
          );
        });
      });
    });
  } 
 
  getChampionId(id: number): string {
    return this.champions.getChampionNameById(id);
  }
}
