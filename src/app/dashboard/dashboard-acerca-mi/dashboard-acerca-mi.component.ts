import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaMi } from 'src/app/model/acerca-mi';
import { AcercaMiService } from 'src/app/service/acerca-mi.service';

@Component({
  selector: 'app-dashboard-acerca-mi',
  templateUrl: './dashboard-acerca-mi.component.html',
  styleUrls: ['./dashboard-acerca-mi.component.css']
  
})
export class DashboardAcercaMiComponent implements OnInit {
  titulo: string = "Aceca de mi";
  acercaMi: AcercaMi;
  acercaList: AcercaMi [];
  constructor(private datosPorfolio: AcercaMiService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getAcercaMis().subscribe(data =>{
      this.acercaList = data;
      console.log(data);
    })
  }

  onDelete(id:number){
    this.datosPorfolio.getAcercaMi(id).subscribe(acercaMi=>{
    this.acercaMi = acercaMi;
    console.log(acercaMi);
    this.datosPorfolio.deleteAcercaMi(this.acercaMi.id).subscribe(data=>{
        console.log("Texto eliminado");
        alert("Texto Eliminado");
        this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
        });
      });
    });
  }

}
