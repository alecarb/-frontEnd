import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkill } from 'src/app/model/hard-skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';

@Component({
  selector: 'app-hard-skill-edit',
  templateUrl: './hard-skill-edit.component.html',
  styleUrls: ['./hard-skill-edit.component.css']
})
export class HardSkillsEditComponent implements OnInit {
  hardSkill: HardSkill;
  constructor(private route: ActivatedRoute, private datosPorfolio: HardSkillService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getHardSkill(id).subscribe(data => {
      this.hardSkill = data;
    });
  }

  onUpdate() {
    this.datosPorfolio.updateHardSkill(this.hardSkill).subscribe(data => {
      console.log(data);
      alert('Hard skill actualizada!');
      this.router.navigate(['/dashboard']);
    });
  }
}
