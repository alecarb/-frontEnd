import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private baseURL = 'http://localhost:8080/proyecto/';
  constructor(private httpClient: HttpClient) { }

  public getProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(`${this.baseURL}ver/${id}`);
  }

  public getProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}ver/proyectos`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.post<Proyecto>(`${this.baseURL}new/proyecto`, proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(`${this.baseURL}edit/${proyecto.id}`, proyecto);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.delete<Proyecto>(`${this.baseURL}delete/${id}`);
  }
}
