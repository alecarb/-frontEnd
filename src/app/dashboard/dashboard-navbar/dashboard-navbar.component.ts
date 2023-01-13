import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navbar } from 'src/app/model/navbar';
import { NavbarService } from 'src/app/service/navbar.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {
  titulo: string = "Perfiles de redes sociales";
  navbar: Navbar;
  navabarList: Navbar [];
  constructor(private datosPorfolio: NavbarService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getNavbar().subscribe(data => {
      this.navabarList = data;
    });
  }

  onDelete(id: number) {
    this.datosPorfolio.deleteNavbar(id).subscribe(
    data => {
      alert('Eliminado');
      this.router.navigate(['dashboard']).then(() => {
      window.location.reload();
      });
    });
  }  
}
