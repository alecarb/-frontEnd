import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HardSkill } from '../model/hard-skill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

private baseUrl = 'http://localhost:8080/hardSkill';

constructor(private http: HttpClient) { }

getHardSkill(id: number) {
return this.http.get<HardSkill>(`${this.baseUrl}/ver/${id}`);
}

getHardSkillsList() {
return this.http.get<HardSkill[]>(`${this.baseUrl}/list`);
}

createHardSkill(skill: HardSkill) {
return this.http.post(`${this.baseUrl}/new/skill`, skill);
}

updateHardSkill(id: number, value: any) {
return this.http.put(`${this.baseUrl}/edit/${id}`, value);
}

deleteHardSkill(id: number) {
return this.http.delete(`${this.baseUrl}/delete/${id}`);
}
}
