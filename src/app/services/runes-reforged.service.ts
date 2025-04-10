import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RunesReforgedService {
  private runesData: any[] = [];
  private runeMap = new Map<number, any>();
  private styleMap = new Map<number, any>();
  private loaded = false;

  constructor(private http: HttpClient) {}

  async loadRunes(): Promise<void> {
    if (this.loaded) return;

    const url = 'https://ddragon.leagueoflegends.com/cdn/15.6.1/data/en_US/runesReforged.json';
    const data = await firstValueFrom(this.http.get<any[]>(url));
    this.runesData = data;

    for (const style of data) {
      this.styleMap.set(style.id, style);
      for (const slot of style.slots) {
        for (const rune of slot.runes) {
          this.runeMap.set(rune.id, rune);
        }
      }
    }

    this.loaded = true;
  }

  getRuneIconUrl(perkId: number): string {
    const rune = this.runeMap.get(perkId);
    return rune ? `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}` : '';
  }

  getStyleIconUrl(styleId: number): string {
    const style = this.styleMap.get(styleId);
    return style ? `https://ddragon.leagueoflegends.com/cdn/img/${style.icon}` : '';
  }

  getRuneName(perkId: number): string {
    return this.runeMap.get(perkId)?.name ?? 'Desconocida';
  }

  getStyleName(styleId: number): string {
    return this.styleMap.get(styleId)?.name ?? 'Desconocido';
  }
}
