import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  private baseURL = 'http://localhost:8080/educacion/';
  constructor(private httpClient: HttpClient) { }

  public getEducacion(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.baseURL}ver/${id}`);
  }

  public getEducaciones(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(`${this.baseURL}list`);
  }

  public createEducacion(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.post<Educacion>(`${this.baseURL}new/educacion`, educacion);
  }

  public updateEducacion(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.put<Educacion>(`${this.baseURL}edit/${educacion.id}`, educacion);
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.httpClient.delete<Educacion>(`${this.baseURL}delete/${id}`);
  }
}
