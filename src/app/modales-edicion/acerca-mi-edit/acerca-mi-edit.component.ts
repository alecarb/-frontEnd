import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaMi } from 'src/app/model/acerca-mi';
import { AcercaMiService } from 'src/app/service/acerca-mi.service';

@Component({
  selector: 'app-acerca-mi-edit',
  templateUrl: './acerca-mi-edit.component.html',
  styleUrls: ['./acerca-mi-edit.component.css']
})
export class AcercaMiEditComponent implements OnInit {
  acercaMi: AcercaMi;
  constructor(private route: ActivatedRoute, private datosPorfolio: AcercaMiService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getAcercaMi(id).subscribe(data => {
      this.acercaMi = data;
    });
  }

  onUpdate() {
    this.datosPorfolio.updateAcercaMi(this.acercaMi).subscribe(data => {
      console.log(data);
      alert('Hard skill actualizada!');
      this.router.navigate(['/dashboard']);
    });
  }
}
