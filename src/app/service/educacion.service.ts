import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  private baseURL = environment.baseURL;

  //private baseURL = 'http://localhost:8080/educacion/';
  constructor(private httpClient: HttpClient) { }

  public getEducacion(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(`${this.baseURL}/educacion/ver/${id}`);
  }

  public getEducaciones(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(`${this.baseURL}/educacion/list`);
  }

  public createEducacion(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.post<Educacion>(`${this.baseURL}/educacion/new/educacion/1`, educacion);
  }

  public updateEducacion(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.put<Educacion>(`${this.baseURL}/educacion/edit/${educacion.id}`, educacion);
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.httpClient.delete<Educacion>(`${this.baseURL}/educacion/delete/${id}`);
  }
}
