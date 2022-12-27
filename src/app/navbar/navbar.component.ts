import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  redes: any;
  miPorfolio:any; 
  isDashboard = false; 
  isLoggedIn = false;

  constructor(private datosPorfolio:PorfolioService, private router: Router,
     private tokenService: TokenService) { } 

  ngOnInit(): void { 
    this.datosPorfolio.obtenerDatos().subscribe(data =>{this.miPorfolio = data; 
    const currentRoute = window.location.pathname;
    if (currentRoute === '/dashboard') {this.isDashboard = true;}
  });
  if(this.tokenService.getToken()){
    this.isLoggedIn=true;
  }else{
    this.isLoggedIn =false;
  }
}

onLogOut(): void {
  // Eliminar el token de autenticación almacenado en la sesión de usuario
  this.tokenService.logOut();

  // Recargar la página para actualizar el estado de la sesión
  window.location.reload();
}

login(){
  this.router.navigate(['/login'])
}

}
