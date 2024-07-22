import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticApiService {

  private apiUrl = '/'; // URL de la API

  constructor(private http: HttpClient) { }

  sum(num1: number, num2: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/sum?num1=${num1}&num2=${num2}`, { responseType: 'json' });
  }

  subtract(num1: number, num2: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/subtract?num1=${num1}&num2=${num2}`, { responseType: 'json' });
  }

  multiply(num1: number, num2: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiply?num1=${num1}&num2=${num2}`, { responseType: 'json' });
  }

  divide(num1: number, num2: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/divide?num1=${num1}&num2=${num2}`, { responseType: 'json' });
  }

}
