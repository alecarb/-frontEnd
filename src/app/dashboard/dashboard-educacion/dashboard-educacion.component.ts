import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../service/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-dashboard-educacion',
  templateUrl: './dashboard-educacion.component.html',
  styleUrls: ['./dashboard-educacion.component.css']
})
export class DashboardEducacionComponent implements OnInit {
  titulo: string = "Educacion";
  educacion: Educacion;
  educacionList: Educacion [];
  constructor(private datosPorfolio: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getEducaciones().subscribe(data =>{
      this.educacionList = data;
      console.log(data);
    })
  }

  onDelete(id:number){
    this.datosPorfolio.getEducacion(id).subscribe(educacion=>{
    this.educacion = educacion;
    console.log(educacion);
    this.datosPorfolio.deleteEducacion(this.educacion.id).subscribe(data=>{
        console.log("educacion eliminada");
        alert("Educacion Eliminada");
        this.router.navigate(['dashboard']).then(() => {
        window.location.reload();
        });
      });
    });
  }

}
