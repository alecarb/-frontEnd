import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable, tap } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;

  //private readonly baseURL = 'http://localhost:8080/auth';
  isLoggedIn = false;
  

  constructor(private http: HttpClient) { }

  public createUser(newUser: NuevoUsuario): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/auth/nuevo`, newUser);
  }

  public login(loginUser: LoginUsuario): Observable<JwtDto> {
    console.log('Iniciando llamado al servicio AuthService:', loginUser);
    return this.http.post<JwtDto>(`${this.baseURL}/auth/login`, loginUser).
    pipe(tap(res=>{
      console.log('Respuesta del servidor:', res);
    }))
    
  };

}
