import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-dashboard-exp-lab',
  templateUrl: './dashboard-exp-lab.component.html',
  styleUrls: ['./dashboard-exp-lab.component.css']
})
export class DashboardExpLabComponent implements OnInit {
  trabajoList: Trabajo[];
  trabajo: Trabajo;
  titulo : string = "Experiencia Laboral";
  constructor(private datosPorfolio: TrabajoService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.getTrabajos().subscribe(data =>{
      this.trabajoList = data;
      //console.log(data);
    });  }
  
    onDelete(id: number) {
      this.datosPorfolio.getTrabajo(id).subscribe(trabajo => {
        this.trabajo = trabajo;
        this.datosPorfolio.deleteTrabajo(this.trabajo.id).subscribe(data => {
          console.log("It's delete");
          alert('Trabajo Eliminado');
          this.router.navigate(['dashboard']).then(() => {
            window.location.reload();
          });
        });
      });
      
    }

    

          
}
