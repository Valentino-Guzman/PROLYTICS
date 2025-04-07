import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../interfaces/account';
import { EloPlayer } from '../interfaces/elo-player';
import { Participant } from '../interfaces/player-stats';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

    private accountData = new BehaviorSubject<Account>({} as Account);
    accountData$ = this.accountData.asObservable(); 
    
    private matchesSource = new BehaviorSubject<string[]>([]);
    matches$ = this.matchesSource.asObservable();

    private championName = new BehaviorSubject<Participant[]>([]);
    championName$ = this.championName.asObservable();
    
    private accountDataSubject = new BehaviorSubject<Account | null>(null);
    accountDataSubject$ = this.accountDataSubject.asObservable();



    constructor() {}
  
    setAccountData(data: Account): void {
      this.accountData.next(data);
    }

    setMatches(matches: string[]): void { 
      this.matchesSource.next(matches);
    }

    setChampionName(championName: Participant[]): void {
      this.championName.next(championName);
    }

    setPuuid(puuid: string) {

    }

    hasAccountData(): boolean {
      return this.accountDataSubject.getValue() !== null;
    }
}
