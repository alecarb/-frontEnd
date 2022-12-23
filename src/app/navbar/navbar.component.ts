import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redes: any;
  miPorfolio:any; //4 declaramos el atributo.
  isDashboard = false; // Propiedad que indica si estamos en el componente "dashboard" o no


  constructor(private datosPorfolio:PorfolioService) { } // 4 se inyecta el servicio

  ngOnInit(): void { // 4 se suscribe 
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      //5 lado izq= apunta al atributo/ lado derecho se asocia al string del navar en el data.json
      //traemos todos los atributos que tengamos en el json para que los muestre en el componente
      //al igual que el navbar
      this.miPorfolio = data; 
       // Obtener la ruta actual y verificar si es la ruta del componente "dashboard"
    const currentRoute = window.location.pathname;
    if (currentRoute === '/dashboard') {
      this.isDashboard = true;
    }
  });
}
}
