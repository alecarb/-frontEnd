import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  trabajoList: any;
  titulo : string = "Experiencia Laboral";
  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.trabajoList = data.trabajos;
    });  }

}
