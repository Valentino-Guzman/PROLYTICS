import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { SharedDataService } from './shared-data.service';
import { environment } from '../enviroments/api-key';
import { DataMatch } from '../interfaces/player-stats';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchId: string[] = [];

  constructor(
    private http: HttpClient,
    private sharedData: SharedDataService
  ) { }

  getMatchId(): Observable<DataMatch[]> {
    return this.sharedData.matches$.pipe(
      switchMap((data) => {
        this.matchId = data;
        const requests = data.map(matchId =>
          this.http.get<DataMatch>(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${environment.apiKey}`)
        );
        return forkJoin(requests);
      })
    );
  }
}
