import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/api-key';
import { SharedDataService } from './shared-data.service';
import { filter, Observable, switchMap } from 'rxjs';
import { Account } from '../interfaces/account';
import { Mastery } from '../interfaces/mastery';

@Injectable({
  providedIn: 'root'
})
export class MasteryChampionsService {

  puuid: string = '';

  constructor(
    private http: HttpClient,
    private sharedData: SharedDataService
  ) { }

  getChampionMastery(): Observable<Mastery[]> {
    return this.sharedData.accountData$.pipe(
      filter((data:Account) => !!data.puuid),
      switchMap((data: Account) => {
        this.puuid = data.puuid;
        const url = `https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${this.puuid}/top?api_key=${environment.apiKey}`;
        return this.http.get<Mastery[]>(url);
      })
    );
  }
}
