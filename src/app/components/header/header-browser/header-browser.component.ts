import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../../services/account-service.service';
import { Account } from '../../../interfaces/account';
import { SharedDataService } from '../../../services/shared-data.service';
import { Summoner } from '../../../interfaces/summoner';
import { PuuidService } from '../../../services/puuid.service';
import { Router } from '@angular/router';
import { ChampionsProfileService } from '../../../services/matches-profile.service';

@Component({
  selector: 'app-header-browser',
  imports: [FormsModule],
  templateUrl: './header-browser.component.html',
  styleUrl: './header-browser.component.css'
})
export class HeaderBrowserComponent {
  

}


