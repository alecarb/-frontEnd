import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion-new',
  templateUrl: './educacion-new.component.html',
  styleUrls: ['./educacion-new.component.css']
})
export class EducacionNewComponent implements OnInit {
  educacionList: Educacion [] = [];
  educacion: Educacion;
  constructor(private datosProfolio: EducacionService, private router: Router,) { }

  ngOnInit(): void {
    this.educacion = new Educacion('','','','');
  }

  onCreate(form: NgForm) {
    if (this.educacionList.length === 0) {
      this.educacion.id = 0;
    } else {
      this.educacion.id = this.educacionList[this.educacionList.length - 1].id + 1;
    }
    
    //this.educacion.image_trab = form.value.image_trab;
    this.educacion.institucion = form.value.institucion;
    this.educacion.titulo = form.value.titulo;
    this.educacion.fecha_inicio = form.value.fecha_inicio;
    this.educacion.fecha_fin = form.value.fecha_fin;
    //this.educacion.en_curso = form.value.en_curso
  
    this.datosProfolio.createEducacion(this.educacion).subscribe(nuevaEducacion => {
      console.log("Educacion creada");
      alert('Educacion creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }


}
