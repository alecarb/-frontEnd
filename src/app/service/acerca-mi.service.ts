import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaMi } from '../model/acerca-mi';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AcercaMiService {

  private baseURL = environment.baseURL;
  //private baseURL = 'http://localhost:8080/about/';
  constructor(private httpClient: HttpClient) {}

  public getAcercaMi(id: number): Observable<AcercaMi> {
    return this.httpClient.get<AcercaMi>(`${this.baseURL}/about/ver/${id}`);
  }


  public getAcercaMis(): Observable<AcercaMi[]> {
    return this.httpClient.get<AcercaMi[]>(`${this.baseURL}/about/list`);
  }

  public createAcercaMi(acerca_mi: AcercaMi): Observable<AcercaMi> {
    return this.httpClient.post<AcercaMi>(`${this.baseURL}/about/new/about`, acerca_mi);
  }

  public updateAcercaMi(acerca_mi: AcercaMi): Observable<AcercaMi> {
    return this.httpClient.put<AcercaMi>(`${this.baseURL}/about/edit/${acerca_mi.id}`, acerca_mi);
  }

  public deleteAcercaMi(id: number): Observable<AcercaMi> {
    return this.httpClient.delete<AcercaMi>(`${this.baseURL}/about/delete/${id}`);
  }

  
}
