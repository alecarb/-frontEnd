import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/model/navbar';
import { NavbarService } from '../../service/navbar.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar-new',
  templateUrl: './navbar-new.component.html',
  styleUrls: ['./navbar-new.component.css']
})
export class NavbarNewComponent implements OnInit {
  navbarList: Navbar[] = [];
  navbar: Navbar;
  constructor(private datosPorfolio: NavbarService, private router: Router) { }

  ngOnInit(): void {
    this.navbar = new Navbar(0,'','','');
  }

  onCreate(form: NgForm) {
    if (this.navbarList.length === 0) {
      this.navbar.id = 0;
    } else {
      this.navbar.id = this.navbarList[this.navbarList.length - 1].id + 1;
    }

    this.navbar.id = form.value.id;
    this.navbar.red = form.value.red;
    this.navbar.logo = form.value.logo;
    this.navbar.nombre = form.value.nombre;
    
    

    this.datosPorfolio.createNavbar(this.navbar).subscribe(nuevared => {
      console.log("Red creada");
      alert('Red creada');
      this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
      });
    });
  }
}
