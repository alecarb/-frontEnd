import { Component, OnInit } from '@angular/core';
import PersonaService from '../../service/persona.service';
import { Router } from '@angular/router';
import Persona from 'src/app/model/persona';

@Component({
  selector: 'app-dashboard-persona',
  templateUrl: './dashboard-persona.component.html',
  styleUrls: ['./dashboard-persona.component.css']
})
export class DashboardPersonaComponent implements OnInit {

  constructor(private datosPorfolio: PersonaService,private router: Router) { }
  personaList: Persona[];
  persona: Persona;
  titulo : string = "Datos Personales";

  ngOnInit(): void {
    this.datosPorfolio.getPersonas().subscribe(data =>{
      this.personaList = data;
      //console.log(data);
    });  }
  
    onDelete(id: number) {
      this.datosPorfolio.deletePersona(id).subscribe(
      data => {
        alert('Eliminado');
        this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
        });
      });
    }  
  
    

          
}
