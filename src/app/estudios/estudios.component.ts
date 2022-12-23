import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  educacionList :any;
  //educacion: Educacion[] = []; //importo el modelo
  titulo: string = "Formacion";

  //contructor con el servicio de educacion (y el token, a posterior)
  //constructor(private educacionS: EducacionService, ){}
  //ngOnInit(): void {
  //  throw new Error('Method not implemented.');
  //}

  //Contructor para front con Json

  constructor(private datosPorfolio:PorfolioService) { }
  
  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.educacionList = data.educacion //educacion es el nombre del tag en el json tambien lo voy a usar como variable iteradora
    
   });

  }

}
