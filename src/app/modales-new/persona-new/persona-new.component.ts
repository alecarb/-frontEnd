import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Persona from 'src/app/model/persona';
import PersonaService from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona-new',
  templateUrl: './persona-new.component.html',
  styleUrls: ['./persona-new.component.css']
})
export class PersonaNewComponent implements OnInit {
  personaList: Persona [] = [];
  persona: Persona;
  constructor( private route: ActivatedRoute,private datosPorfolio: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.persona = new Persona(0, '', '', '', '', '', 0,'');
  }

  onCreate(form: NgForm) {
    if (this.personaList.length === 0) {
      this.persona.id = 0;
    } else {
      this.persona.id = this.personaList[this.personaList.length - 1].id + 1;
    }
    this.persona.nombre = form.value.nombre;
    this.persona.apellido = form.value.apellido;
    this.persona.email = form.value.email;
    this.persona.image_perfil = form.value.image_perfil;
    this.persona.dni = form.value.dni;
    this.persona.residencia = form.value.residencia;
  
    this.datosPorfolio.createPersona(this.persona).subscribe(nuevoTrabajo => {
      //console.log("Persona creada");
      alert('Persona creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }

  imageError = false;
  imageEmpty = false;
  validateImage() {
    if(!this.persona.image_perfil) {
        this.imageError = false;
        this.imageEmpty = true;
    } else if(!(this.persona.image_perfil.startsWith("http") || this.persona.image_perfil.startsWith("https"))) {
        this.imageError = true;
        this.imageEmpty = false;
    } else {
        this.imageError = false;
        this.imageEmpty = false;
    }
}

  error = false;
  validateDNI() {
       if((this.persona.dni+'').includes(".") || (this.persona.dni+'').includes(" ")) {
           this.error = true;
       } else {
           this.error = false;
       }
   }
  
   emptyError = false;
    emptyErrorField = "";
    validateRequiredField(value:string,field:string) {
        if(!value) {
            this.emptyError = true;
            this.emptyErrorField = field;
        } else {
            this.emptyError = false;
            this.emptyErrorField = "";
        }
    }
  

}
