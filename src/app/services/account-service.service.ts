import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/api-key'
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  gameName: string = '';
  hashtag: string = '';


  constructor(
    private http:HttpClient
  ) { }

  getAccount(): Observable<Account> {
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${this.gameName}/${this.hashtag}?api_key=${environment.apiKey}`;
    return this.http.get<Account>(url);
  }
}
