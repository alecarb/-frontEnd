import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaMi } from '../model/acerca-mi';

@Injectable({
  providedIn: 'root'
})
export class AcercaMiService {
  private baseURL = 'http://localhost:8080/about/';
  constructor(private httpClient: HttpClient) {}

  public getAcercaMi(): Observable<AcercaMi> {
    return this.httpClient.get<AcercaMi>(`${this.baseURL}list`);
  }

  public createAcercaMi(acercaMi: AcercaMi): Observable<AcercaMi> {
    return this.httpClient.post<AcercaMi>(`${this.baseURL}new`, acercaMi);
  }

  public updateAcercaMi(acercaMi: AcercaMi): Observable<AcercaMi> {
    return this.httpClient.put<AcercaMi>(`${this.baseURL}edit/${acercaMi.id}`, acercaMi);
  }

  public deleteAcercaMi(id: number): Observable<AcercaMi> {
    return this.httpClient.delete<AcercaMi>(`${this.baseURL}delete/${id}`);
  }

  
}
