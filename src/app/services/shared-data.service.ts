import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../interfaces/account';
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

    private tierSource = new BehaviorSubject<string>('CHALLENGER');
    tierSource$ = this.tierSource.asObservable();

    
    
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

    setTier(tier: string) {
      this.tierSource.next(tier);
    }
}
