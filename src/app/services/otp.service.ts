import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/api-url';
import { Observable } from 'rxjs';
import { OtpStats } from '../interfaces/stats';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(
    private http: HttpClient
  ) { }

  getOtpStats(): Observable<OtpStats[]> {
    return this.http.get<OtpStats[]>(`${environment.apiUrl}champions/otp`)
  }
}
