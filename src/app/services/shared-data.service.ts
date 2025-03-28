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
  
    constructor() {}
  
    setAccountData(data: Account): void {
      this.accountData.next(data);
    }
}
