import { Component, OnInit } from '@angular/core';
import { AcercaMiService } from '../service/acerca-mi.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  titulo: string = "Acerca de Mi";
  descripcionesList:any;

 

  constructor(private datosPorfolio:AcercaMiService) { }

  ngOnInit(): void {
    this.datosPorfolio.getAcercaMi().subscribe(data=>{
      this.descripcionesList=data;
      
     console.log(data);
    });
  }

}
