import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-trabajo-new',
  templateUrl: './trabajo-new.component.html',
  styleUrls: ['./trabajo-new.component.css']
})
export class TrabajoNewComponent implements OnInit {
  trabajoList: Trabajo [] = [];
  trabajo: Trabajo;
  constructor( private route: ActivatedRoute,private datosPorfolio: TrabajoService, private router: Router) { }

  ngOnInit(): void {
    this.trabajo = new Trabajo(0, '', '', '', '', '');
  }

  onCreate(form: NgForm) {
    if (this.trabajoList.length === 0) {
      this.trabajo.id = 0;
    } else {
      this.trabajo.id = this.trabajoList[this.trabajoList.length - 1].id + 1;
    }
    this.trabajo.empresa = form.value.empresa;
    this.trabajo.puesto = form.value.puesto;
    this.trabajo.text_descrip = form.value.text_descrip;
    this.trabajo.fecha_inicio = form.value.fecha_inicio;
    this.trabajo.fecha_fin = form.value.fecha_fin;
  
    this.datosPorfolio.createTrabajo(this.trabajo).subscribe(nuevoTrabajo => {
      console.log("Trabajo creado");
      alert('Trabajo creado');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }
  

}
