import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/api-key';
import { SharedDataService } from './shared-data.service';
import { Account } from '../interfaces/account';
import { concatMap, forkJoin, from, map, Observable, reduce, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsProfileService {

  puuid: string = '';

  constructor(
    private http: HttpClient,
    private sharedData: SharedDataService
    ) { }

    getMatchesProfile(): Observable<string[]> {
      const start = 0;
      const count = 5;
      const total = 15;
    
      return this.sharedData.accountData$.pipe(
        switchMap((data: Account) => {
          this.puuid = data.puuid;
          
          const indices = [];
          for (let i = start; i < total; i += count) {
            indices.push(i);
          }
    
          return from(indices).pipe(
            concatMap(i => {
              const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.puuid}/ids?start=${i}&count=${count}&api_key=${environment.apiKey}`;
              return this.http.get<string[]>(url);
            }),
            reduce((acc, val) => acc.concat(val), [] as string[])
          );
        })
      );
    }
}
