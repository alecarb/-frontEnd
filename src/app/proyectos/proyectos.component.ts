import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../service/proyecto.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectoList : Proyecto [];
  proyectos:any;
  titulo: string= "Proyectos";
  
  constructor (private datosPorfolio: ProyectoService) { }
  ngOnInit(): void {
    this.datosPorfolio.getProyectos().subscribe(data =>{
      this.proyectoList = data; 
      console.log(data);
  });
  }

}
