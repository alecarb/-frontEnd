import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkill } from 'src/app/model/soft-skill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-soft-skill-edit',
  templateUrl: './soft-skill-edit.component.html',
  styleUrls: ['./soft-skill-edit.component.css']
})
export class SoftSkillsEditComponent implements OnInit {
  softSkill: SoftSkill;
  constructor(private route: ActivatedRoute, private datosPorfolio: SoftSkillService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getSoftSkill(id).subscribe(data => {
      this.softSkill = data;
    });
  }

  onUpdate() {
    this.datosPorfolio.updateSoftSkill(this.softSkill).subscribe(data => {
      console.log(data);
      alert('Soft skill actualizada!');
      this.router.navigate(['/dashboard']);
    });
  }
}
