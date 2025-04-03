import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/api-key';
import { SharedDataService } from './shared-data.service';
import { Account } from '../interfaces/account';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsProfileService {

  puuid: string = '';

  constructor(
    private http: HttpClient,
    private sharedData: SharedDataService
    ) { }

  getMatchesProfile(): Observable<[]> {
    return this.sharedData.accountData$.pipe(
      switchMap((data:Account) => {
        this.puuid = data.puuid;
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.puuid}/ids?start=0&count=2&api_key=${environment.apiKey}`
        console.log(url)
        return this.http.get<[]>(url);
      })
    )
  }
}
