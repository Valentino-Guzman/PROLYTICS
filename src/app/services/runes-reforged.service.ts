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
  getStatPerkIcon(value: number): string {
    const statMap: Record<number, string> = {
      5001: 'StatModsHealthScalingIcon.png',    
      5002: 'StatModsArmorIcon.png',             
      5003: 'StatModsMagicResIcon.png',
      5005: 'StatModsAttackSpeedIcon.png',
      5007: 'StatModsCDRScalingIcon.png',        
      5008: 'StatModsAdaptiveForceIcon.png',     
    };
    const iconName = statMap[value] || 'StatModsAdaptiveForceIcon.png';
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/${iconName}`;
  };
}

