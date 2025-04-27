import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BanStats, ChampionStats } from '../interfaces/stats';
import { environment } from '../../enviroments/api-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BansStatsService {

  constructor(
    private http: HttpClient
  ) { }

  getChampionsStats(): Observable<BanStats[]> {
    const url = `${environment.apiUrl}champions/bans`;
    return this.http.get<BanStats[]>(url);
  }
}
