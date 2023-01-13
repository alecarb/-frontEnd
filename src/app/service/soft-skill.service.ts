import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SoftSkill } from '../model/soft-skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class SoftSkillService {
  
  private baseURL = 'http://localhost:8080/softSkill/';
  constructor(private httpClient: HttpClient) { }
  
  public getSoftSkill(id: number): Observable<SoftSkill> {
  return this.httpClient.get<SoftSkill>(`${this.baseURL}ver/${id}`);
  }
  
  public getSoftSkills(): Observable<SoftSkill[]> {
  return this.httpClient.get<SoftSkill[]>(`${this.baseURL}list`);
  }
  
  public createSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
  return this.httpClient.post<SoftSkill>(`${this.baseURL}new/skill`, softSkill);
  }
  
  public updateSoftSkill(softSkill: SoftSkill): Observable<SoftSkill> {
  return this.httpClient.put<SoftSkill>(`${this.baseURL}edit/${softSkill.id}`, softSkill);
  }
  
  public deleteSoftSkill(id: number): Observable<SoftSkill> {
  return this.httpClient.delete<SoftSkill>(`${this.baseURL}delete/${id}`);
  }
}
  