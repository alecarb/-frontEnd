import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-trabajo-delete',
  templateUrl: './trabajo-delete.component.html',
  styleUrls: ['./trabajo-delete.component.css']
})
export class TrabajoDeleteComponent implements OnInit {
  trabajo: Trabajo;
  constructor( private route: ActivatedRoute,private datosPorfolio: TrabajoService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getTrabajo(id).subscribe(data =>{
      this.trabajo = data;
    });
  }
  


}
