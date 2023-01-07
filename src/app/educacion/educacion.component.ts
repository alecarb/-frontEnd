import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacionList :any;
  titulo: string = "Educacion";


  constructor(private datosPorfolio:EducacionService) { }
  
  ngOnInit(): void{
    this.datosPorfolio.getEducaciones().subscribe(data =>{
    this.educacionList = data;
    console.log(data); 

    
   });

  }

}
