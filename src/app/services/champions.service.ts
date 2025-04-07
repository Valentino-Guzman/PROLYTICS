import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private championMap: { [key: string]: string } = {};
  private loaded = false;

  constructor(private http: HttpClient) {}

  
  async loadChampions(): Promise<void> {
    if (this.loaded) return;
  
    const url = 'https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json';
  
    const data = await firstValueFrom(this.http.get<any>(url));
    const champions = data.data;
  
    for (let champKey in champions) {
      const champ = champions[champKey];
      this.championMap[champ.key] = champ.name;
    }
  
    this.loaded = true;
  }
  
  getChampionNameById(id: number): string {
    return this.championMap[id.toString()] ?? 'Desconocido';
  }
}
