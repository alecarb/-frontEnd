import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redes: any;
  mostrar:boolean = false;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

  mostrarse():void{ //cuando llamo a fn login se ven nlos botones de edicion. Lo uso con el *ngIf
    this.mostrar = !this.mostrar;
  }

}
