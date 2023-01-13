import { Component, OnInit } from '@angular/core';
import { AcercaMi } from 'src/app/model/acerca-mi';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaMiService } from 'src/app/service/acerca-mi.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acerca-mi-new',
  templateUrl: './acerca-mi-new.component.html',
  styleUrls: ['./acerca-mi-new.component.css']
})
export class AcercaMiNewComponent implements OnInit {
  acercaMiList: AcercaMi [] = [];
  acercaMi: AcercaMi;
  constructor( private route: ActivatedRoute,private datosPorfolio: AcercaMiService, private router: Router) { }

  ngOnInit(): void {
    this.acercaMi = new AcercaMi(0,'');
  }

  onCreate(form: NgForm) {
    if (this.acercaMiList.length === 0) {
      this.acercaMi.id = 0;
    } else {
      this.acercaMi.id = this.acercaMiList[this.acercaMiList.length - 1].id + 1;
    }
    this.acercaMi.descripcion = form.value.descripcion;
  
    this.datosPorfolio.createAcercaMi(this.acercaMi).subscribe(nuevoAcercaMi => {
      console.log("Descripcion creada");
      alert('Descripcion creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }
  

}
