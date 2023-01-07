import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navbar } from '../model/navbar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private baseURL = 'http://localhost:8080/navbar/';
  constructor(private http: HttpClient) { }

  public getNavbar(): Observable<Navbar[]> {
    return this.http.get<Navbar[]>(`${this.baseURL}list`);
  }

  public createNavbar(navbar: Navbar): Observable<Navbar> {
    return this.http.post<Navbar>(`${this.baseURL}new/navbar`, navbar);
  }

  public updateNavbar(navbar: Navbar): Observable<Navbar> {
    return this.http.put<Navbar>(`${this.baseURL}edit/${navbar.id}`, navbar);
  }

  public deleteNavbar(id: number): Observable<Navbar> {
    return this.http.delete<Navbar>(`${this.baseURL}delete/${id}`);
  }



}
