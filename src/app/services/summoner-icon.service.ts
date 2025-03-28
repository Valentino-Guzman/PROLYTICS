import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { SharedDataService } from './shared-data.service';
import { Summoner } from '../interfaces/summoner';
import { Account } from '../interfaces/account';
import { environment } from '../enviroments/api-key';
import { PuuidService } from './puuid.service';

@Injectable({
  providedIn: 'root'
})
export class SummonerIconService {
  
  idIcon: number = 0;

  constructor(
    private http: HttpClient,
    private puuidService: PuuidService
  ) { }

  getIconProfile():Observable<string> {
    return this.puuidService.getPuuid().pipe(
      switchMap((data: Summoner) => {
        this.idIcon = data.profileIconId;
        const url  = `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/${this.idIcon}.png`
        console.log(url)
        return this.http.get(url, { responseType: 'blob' }).pipe(
          map((blob) => URL.createObjectURL(blob))
        );
      })
    )
  }
}
