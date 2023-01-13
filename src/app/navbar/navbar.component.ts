import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import { NavbarService } from '../service/navbar.service';
import { Navbar } from '../model/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: Navbar [];
 
  isDashboard = false; 
  isLoggedIn = false;

  constructor(private datosPorfolio:NavbarService, private router: Router,
     private tokenService: TokenService) { } 

  

  ngOnInit(): void { 
    this.datosPorfolio.getNavbar().subscribe(data =>{this.navbar = data; 
    const currentRoute = window.location.pathname;
    if (currentRoute === '/dashboard') {this.isDashboard = true;}
    console.log(data);
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
  //window.location.reload();
  this.router.navigate([''])
}

login(){
  this.router.navigate(['/login'])
}
dashboard(){
  this.router.navigate(['/dashboard'])
}

}
