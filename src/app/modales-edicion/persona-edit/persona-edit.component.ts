import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Persona from 'src/app/model/persona';
import PersonaService from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  persona: Persona;
  constructor( private route: ActivatedRoute,private datosPorfolio: PersonaService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getPersona(id).subscribe(data =>{
      this.persona = data;
    });
  }

  onUpdate() {
    // Envia la petición de actualización al backend
    this.datosPorfolio.updatePersona(this.persona).subscribe(data => {
      //console.log(data);
      alert('Datos Personales actualizada!');
      this.router.navigate(['/dashboard']);
    });
  }

  error = false;
   validateDNI() {
        if((this.persona.dni+'').includes(".") || (this.persona.dni+'').includes(" ")) {
            this.error = true;
        } else {
            this.error = false;
        }
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

}