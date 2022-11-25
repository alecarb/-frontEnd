import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  miPorfolio:any;
  titulo: string= "Proyectos";
  
  constructor (private datosPorfolio:PorfolioService) { }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio = data; 
  });
  }

}
