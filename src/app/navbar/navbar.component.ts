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
  miPorfolio:any; //4 declaramos el atributo.

  constructor(private datosPorfolio:PorfolioService) { } // 4 se inyecta el servicio

  ngOnInit(): void { // 4 se suscribe 
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //5 lado izq= apunta al atributo/ lado derecho se asocia al string del navar en el data.json
      //traemos todos los atributos que tengamos en el json para que los muestre en el componente
      //al igual que el navbar
      this.miPorfolio = data; 
    });
  }

  mostrarse():void{ //cuando llamo a fn login se ven nlos botones de edicion. Lo uso con el *ngIf
    this.mostrar = !this.mostrar;
  }

}
