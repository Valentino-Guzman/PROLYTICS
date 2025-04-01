import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

    private accountData = new BehaviorSubject<Account>({} as Account);
    accountData$ = this.accountData.asObservable(); 
    
    private matchesSource = new BehaviorSubject<[]>([]);
    matches$ = this.matchesSource.asObservable();

    private championName = new BehaviorSubject<string[]>({} as string[]);
    championName$ = this.championName.asObservable();

    constructor() {}
  
    setAccountData(data: Account): void {
      this.accountData.next(data);
    }

    setMatches(matches: []): void {
      this.matchesSource.next(matches);
    }

    setChampionName(championNameId: string[]): void {
      this.championName.next(championNameId);
    }
}
