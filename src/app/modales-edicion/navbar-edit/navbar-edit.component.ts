import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';
import { Navbar } from 'src/app/model/navbar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-edit',
  templateUrl: './navbar-edit.component.html',
  styleUrls: ['./navbar-edit.component.css']
})
export class NavbarEditComponent implements OnInit {
  navbar: Navbar;
  constructor(private datosPorfolio: NavbarService, private route: ActivatedRoute, private router: Router) { }
  
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getNavbarById(id).subscribe(data => {
     this.navbar = data;
    });
  }

  onUpdate() {
    this.datosPorfolio.updateNavbar(this.navbar).subscribe(data => {
      console.log(data);
      alert('Red actualizada!');
      this.router.navigate(['/dashboard']);
    });
  }
  

}
