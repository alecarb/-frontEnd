import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HardSkill } from 'src/app/model/hard-skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';

@Component({
  selector: 'app-hard-skill-new',
  templateUrl: './hard-skill-new.component.html',
  styleUrls: ['./hard-skill-new.component.css']
})

export class HardSkillsNewComponent implements OnInit {
  hardSkillList: HardSkill[] = [];
  hardSkill: HardSkill;
  constructor(private datosPorfolio: HardSkillService, private router: Router) { }

  ngOnInit(): void {
    this.hardSkill = new HardSkill(0,'', 0);
  }

  onCreate(form: NgForm) {
    if (this.hardSkillList.length === 0) {
      this.hardSkill.id = 0;
    } else {
      this.hardSkill.id = this.hardSkillList[this.hardSkillList.length - 1].id + 1;
    }

    this.hardSkill.habilidad = form.value.habilidad;
    this.hardSkill.porcentaje = form.value.porcentaje;

    this.datosPorfolio.createHardSkill(this.hardSkill).subscribe(nuevaHardSkill => {
      console.log("Hard skill creada");
      alert('Hard skill creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }
}
