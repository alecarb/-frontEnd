import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable, tap } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = 'http://localhost:8080/auth';
  isLoggedIn = false;
  

  constructor(private http: HttpClient) { }

  public createUser(newUser: NuevoUsuario): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/nuevo`, newUser);
  }

  public login(loginUser: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(`${this.authUrl}/login`, loginUser)
    
  };

}
