import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/model/hard-skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';

@Component({
  selector: 'app-dashboard-hard-skills',
  templateUrl: './dashboard-hard-skills.component.html',
  styleUrls: ['./dashboard-hard-skills.component.css']
})
export class DashboardHardSkillsComponent implements OnInit {
  titulo: string = "Hard Skill";
  hardSkillList: HardSkill[];
  hardSkill: HardSkill;
  constructor(private datosPorfolio: HardSkillService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getHardSkillsList().subscribe(data=>{
      this.hardSkillList = data;
    })
  }

  onDelete(id:number){
    this.datosPorfolio.getHardSkill(id).subscribe( hardSkill=>{
      this.hardSkill = hardSkill;
      this.datosPorfolio.deleteHardSkill(this.hardSkill.id).subscribe(
        data =>{
          alert('Eliminado');
          this.router.navigate(['dashboard']).then(() => {
          window.location.reload();
          });
        }
      )
    })
  }

  
}
