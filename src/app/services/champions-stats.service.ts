import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/api-url';
import { Observable } from 'rxjs';
import { ChampionStats } from '../interfaces/stats';

@Injectable({
  providedIn: 'root'
})
export class ChampionsStatsService {

  constructor(
    private http: HttpClient
  ) { }

  getChampionsStats(): Observable<ChampionStats[]> {
    const url = `${environment.apiUrl}champions/winrate`;
    return this.http.get<ChampionStats[]>(url);
  }
}
