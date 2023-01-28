import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HardSkill } from '../model/hard-skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

private baseURL = environment.baseURL;

//private baseURL = 'http://localhost:8080/hardSkill';

constructor(private http: HttpClient) { }

public getHardSkill(id: number) {
return this.http.get<HardSkill>(`${this.baseURL}/hardSkill/ver/${id}`);
}

public getHardSkillsList() {
return this.http.get<HardSkill[]>(`${this.baseURL}/hardSkill/list`);
}

public createHardSkill(hardSkill: HardSkill) {
return this.http.post(`${this.baseURL}/hardSkill/new/skill/1`, hardSkill);
}

public updateHardSkill(hardSkill: HardSkill) {
return this.http.put(`${this.baseURL}/hardSkill/edit/${hardSkill.id}`, hardSkill);
}

public deleteHardSkill(id: number) {
return this.http.delete(`${this.baseURL}/hardSkill/delete/${id}`);
}
}
