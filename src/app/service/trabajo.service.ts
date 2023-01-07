import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private baseURL = 'http://localhost:8080/trabajo/';

  
  constructor(private httpClient: HttpClient) { }

  public getTrabajo(id: number): Observable<Trabajo> {
    return this.httpClient.get<Trabajo>(`${this.baseURL}ver/${id}`);
  }

  public getTrabajos(): Observable<Trabajo[]> {
    return this.httpClient.get<Trabajo[]>(`${this.baseURL}list`);

  }

  public createTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    return this.httpClient.post<Trabajo>(`${this.baseURL}new/trabajo`, trabajo);
  }

  public updateTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    return this.httpClient.put<Trabajo>(`${this.baseURL}edit/${trabajo.id}`, trabajo);
  }

  public deleteTrabajo(id: number): Observable<Trabajo> {
    return this.httpClient.delete<Trabajo>(`${this.baseURL}delete/${id}`);
  }


}
