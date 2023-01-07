import { Component, OnInit } from '@angular/core';
import { SoftSkillService } from '../service/soft-skill.service';

@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css']
})
export class SoftSkillComponent implements OnInit {

  softSkillList: any;
  titulo: string = "Soft Skills";

  constructor(private datosPorfolio: SoftSkillService ) { }
  ngOnInit(): void {
    this.datosPorfolio.getSoftSkills().subscribe((data: any) =>{
      this.softSkillList = data;
       
      console.log(data);
    });
  }

}
