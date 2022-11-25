import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  educacionList: any;
  formacion: string = "Formacion";

  constructor(private datosPorfolio:PorfolioService) { }
  ngOnInit(): void{
   this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.educacionList = data.educacion //educacion es el nombre del tag en el json tambien lo voy a usar como variable iteradora
    
   });

  }

}
