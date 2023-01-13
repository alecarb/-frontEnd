import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  private baseURL = environment.baseURL;
  //private baseURL = 'http://localhost:8080/proyecto/';
  constructor(private httpClient: HttpClient) { }

  public getProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(`${this.baseURL}/proyecto/ver/${id}`);
  }

  public getProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}/proyecto/list`);
  }

  public createProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.post<Proyecto>(`${this.baseURL}/proyecto/new/proyecto`, proyecto);
  }

  public updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<Proyecto>(`${this.baseURL}/proyecto/edit/${proyecto.id}`, proyecto);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.delete<Proyecto>(`${this.baseURL}/proyecto/delete/${id}`);
  }
}
