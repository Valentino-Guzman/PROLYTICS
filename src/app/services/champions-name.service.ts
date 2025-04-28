import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champions } from '../interfaces/champions';
import { environment } from '../../enviroments/api-url';

@Injectable({
  providedIn: 'root'
})
export class ChampionsNameService {

  constructor(
    private http:HttpClient
  ) { }

  getAllChampions(): Observable<Champions[]> {
    return this.http.get<Champions[]>(`${environment.apiUrl}champions`)
  }


}
