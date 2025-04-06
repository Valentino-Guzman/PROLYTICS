import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { EloPlayer } from '../interfaces/elo-player';
import { SharedDataService } from './shared-data.service';
import { Account } from '../interfaces/account';
import { environment } from '../enviroments/api-key';

@Injectable({
  providedIn: 'root'
})
export class EloPlayerService {

  puuid: string = '';

  constructor( 
    private http: HttpClient,
    private sharedData: SharedDataService,
  ) { }

  getEloPlayer(): Observable<EloPlayer[]> {
    return this.sharedData.accountData$.pipe(
      filter((data:Account) => !!data.puuid),
      switchMap((data: Account) => {
        this.puuid = data.puuid;
        const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-puuid/${this.puuid}?api_key=${environment.apiKey}`;
        return this.http.get<EloPlayer[]>(url, {});
      })
    )
  }
}
