import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummonerSpellService {

  private spellMap = new Map<number, string>();
  private loaded = false;

  constructor(private http: HttpClient) {}

  async loadSummonerSpells(): Promise<void> {
    if (this.loaded) return;

    const url = 'https://ddragon.leagueoflegends.com/cdn/15.6.1/data/en_US/summoner.json';
    const data = await firstValueFrom(this.http.get<any>(url));
    const spells = data.data;

    for (const key in spells) {
      const spell = spells[key];
      this.spellMap.set(Number(spell.key), spell.image.full);
    }

    this.loaded = true;
  }

  getSpellIconUrl(spellId: number): string {
    const filename = this.spellMap.get(spellId);
    return filename
      ? `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/spell/${filename}`
      : '';
  }
}
