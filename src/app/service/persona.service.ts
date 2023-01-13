import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Persona from '../model/persona';
import persona from '../model/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class PersonaService {

  private baseURL = environment.baseURL;
  //private baseURL = 'http://localhost:8080/persona/';
  constructor(private httpClient: HttpClient) { }


  perfilPersona : persona={id:null,nombre:"",apellido:"",email:"",residencia:"",telefono:"",dni:null, image_perfil: ""};

  public getPersona(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/persona/ver/${id}`);
  }

  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseURL}/persona/ver/persona`);
  }

  public createPersona(persona: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>(`${this.baseURL}/persona/new/persona`, persona);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.httpClient.put<Persona>(`${this.baseURL}/persona/edit/${persona.id}`, persona);
  }

  public deletePersona(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>(`${this.baseURL}/persona/delete/${id}`);
  }

}
