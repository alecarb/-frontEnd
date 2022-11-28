import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardSkillList: any;
  softSkillList: any;
  tituloSoft: string = "Soft Skills";
  tituloHard: string = "Hard Skills";

  constructor(private datosPorfolio: PorfolioService ) { }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.hardSkillList = data.hard_skills;
      this.softSkillList = data.soft_skills;
    });
  }

}
