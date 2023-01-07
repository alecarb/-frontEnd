import { Component, OnInit } from '@angular/core';
import { HardSkillService } from '../service/hard-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardSkillList: any;
 
 
  tituloHard: string = "Hard Skills";

  constructor(private datosPorfolio: HardSkillService ) { }
  ngOnInit(): void {
    this.datosPorfolio.getHardSkillsList().subscribe((data: any) =>{
      this.hardSkillList = data;
       
      console.log(data);
    });
  }

}
