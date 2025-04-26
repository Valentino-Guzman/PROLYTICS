import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

import { EloPlayerService } from './elo-player.service';

@Injectable({
  providedIn: 'root'
})
export class EloIconService {

  tier: string = '';

  constructor(
    private http:HttpClient,
    private eloPlayer: EloPlayerService
  ) { }

  getEloIcon(): Observable<any> {
    return this.eloPlayer.getEloPlayer().pipe(
      switchMap((data) => {
        this.tier = data[0].tier.toLowerCase();
        const url = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-${this.tier}.png`;
        return this.http.get(url, { responseType: 'blob' }).pipe(
          map((blob) => URL.createObjectURL(blob))
        );
      })
    )
  }
}
