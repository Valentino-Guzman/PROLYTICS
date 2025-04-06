import { Injectable } from '@angular/core';
import { Summoner } from '../interfaces/summoner';
import { filter, Observable, switchMap } from 'rxjs';
import { Account } from '../interfaces/account';
import { SharedDataService } from './shared-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/api-key';

@Injectable({
  providedIn: 'root'
})
export class PuuidService {

  constructor( 
    private sharedData: SharedDataService,
    private http: HttpClient
  ) { }

  getPuuid(): Observable<Summoner> {
    return this.sharedData.accountData$.pipe(
      filter((data: Account) => !!data.puuid),
      switchMap((data: Account) => {
        const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${data.puuid}?api_key=${environment.apiKey}`;
        return this.http.get<Summoner>(url);
      })
    );
  }
}
