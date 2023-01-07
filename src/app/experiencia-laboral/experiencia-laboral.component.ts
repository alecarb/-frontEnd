import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { TrabajoService } from '../service/trabajo.service';
import { Trabajo } from '../model/trabajo';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  trabajoList: Trabajo[];
  titulo : string = "Experiencia Laboral";
  constructor(private datosPorfolio: TrabajoService) { }

  ngOnInit(): void {
    this.datosPorfolio.getTrabajos().subscribe(data =>{
      this.trabajoList = data;
      console.log(data);
    });  }

}
