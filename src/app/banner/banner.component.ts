import { Component, OnInit } from '@angular/core';
import PersonaService from '../service/persona.service';
import { TokenService } from '../service/token.service';
import Persona from '../model/persona';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  //inicializa como una lista porque lo tengo cargado como lista al metodo para que recupere el perfil.
  personas: Persona[];

 
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged: boolean = false;

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => {this.personas = data});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  traerPerfil(id:number){
    this.personaService.getPersona(id).subscribe(data => {
      this.personaService.perfilPersona = data;
    });
  }

  //constructor con Json
  //constructor(private datosPorfolio:PorfolioService) {}
  //ng con json
  /*
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio = data;
    });
  }
 */


}




