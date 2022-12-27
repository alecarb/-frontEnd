import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Persona from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export default class PersonaService {
  private baseURL = 'http://localhost:8080/usuario/';
  constructor(private httpClient: HttpClient) { }

  public getPersona(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}ver/${id}`);
  }

  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseURL}ver/persona`);
  }

  public createPersona(persona: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>(`${this.baseURL}new/persona`, persona);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.httpClient.put<Persona>(`${this.baseURL}edit/${persona.id}`, persona);
  }

  public deletePersona(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>(`${this.baseURL}delete/${id}`);
  }

}
