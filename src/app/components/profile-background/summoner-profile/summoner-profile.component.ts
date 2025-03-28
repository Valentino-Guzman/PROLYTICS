import { Component, Input, OnInit } from '@angular/core';
import { ButtonUpdateComponent } from "../button-update/button-update.component";
import { Account } from '../../../interfaces/account';
import { SharedDataService } from '../../../services/shared-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-summoner-profile',
  imports: [ButtonUpdateComponent, NgIf],
  templateUrl: './summoner-profile.component.html',
  styleUrl: './summoner-profile.component.css'
})
export class SummonerProfileComponent {
  position: string = '1000';
  server: string = 'LAS'; 
  
  summoner: Account | null = null;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.accountData$.subscribe(
      (data: Account) => {
        this.summoner = data;
      }
    )
  }

}
