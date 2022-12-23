import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'http://localhost:8080/usuario/';
  constructor(private httpClient: HttpClient) { }

  public getUsuario(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}ver/${id}`);
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}ver/usuarios`);
  }

  public createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.baseURL}new/usuario`, usuario);
  }

  public updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.baseURL}edit/${usuario.id}`, usuario);
  }

  public deleteUsuario(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.baseURL}delete/${id}`);
  }

}
