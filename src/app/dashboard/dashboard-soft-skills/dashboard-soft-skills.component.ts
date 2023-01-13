import { Component, OnInit } from '@angular/core';
import { SoftSkill } from '../../model/soft-skill';
import { SoftSkillService } from '../../service/soft-skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-soft-skills',
  templateUrl: './dashboard-soft-skills.component.html',
  styleUrls: ['./dashboard-soft-skills.component.css']
})
export class DashboardSoftSkillsComponent implements OnInit {
  titulo: string = "Soft Skill";
  softSkillList: SoftSkill[];
  softSkill: SoftSkill;
  constructor(private datosPorfolio: SoftSkillService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getSoftSkills().subscribe(data=>{
      this.softSkillList = data;
    })
  }

  onDelete(id:number){
    this.datosPorfolio.getSoftSkill(id).subscribe( softSkill=>{
      this.softSkill = softSkill;
      this.datosPorfolio.deleteSoftSkill(this.softSkill.id).subscribe(
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
