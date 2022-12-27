import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  titulo: string = "Acerca de Mi";
  parrafoList:any;
  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.parrafoList=data.parrafo;
    });
  }

}
