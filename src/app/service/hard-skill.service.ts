import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HardSkill } from '../model/hard-skill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

private baseUrl = 'http://localhost:8080/hardSkill';

constructor(private http: HttpClient) { }

public getHardSkill(id: number) {
return this.http.get<HardSkill>(`${this.baseUrl}/ver/${id}`);
}

public getHardSkillsList() {
return this.http.get<HardSkill[]>(`${this.baseUrl}/list`);
}

public createHardSkill(hardSkill: HardSkill) {
return this.http.post(`${this.baseUrl}/new/skill`, hardSkill);
}

public updateHardSkill(hardSkill: HardSkill) {
return this.http.put(`${this.baseUrl}/edit/${hardSkill.id}`, hardSkill);
}

public deleteHardSkill(id: number) {
return this.http.delete(`${this.baseUrl}/delete/${id}`);
}
}
