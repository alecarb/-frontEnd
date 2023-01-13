import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/soft-skill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-soft-skill-new',
  templateUrl: './soft-skill-new.component.html',
  styleUrls: ['./soft-skill-new.component.css']
})
export class SoftSkillsNewComponent implements OnInit {
  softSkillList: SoftSkill[] = [];
  softSkill: SoftSkill;
  constructor(private datosPorfolio: SoftSkillService, private router: Router) { }

  ngOnInit(): void {
    this.softSkill = new SoftSkill(0,'', 0);
  }

  onCreate(form: NgForm) {
    if (this.softSkillList.length === 0) {
      this.softSkill.id = 0;
    } else {
      this.softSkill.id = this.softSkillList[this.softSkillList.length - 1].id + 1;
    }

    this.softSkill.habilidad = form.value.habilidad;
    this.softSkill.porcentaje = form.value.porcentaje;

    this.datosPorfolio.createSoftSkill(this.softSkill).subscribe(nuevaSoftSkill => {
      console.log("Soft skill creada");
      alert('Soft skill creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }
}
