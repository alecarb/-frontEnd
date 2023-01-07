import { Component, OnInit } from '@angular/core';
import { TrabajoService } from '../../service/trabajo.service';
import { Trabajo } from '../../model/trabajo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trabajo-edit',
  templateUrl: './trabajo-edit.component.html',
  styleUrls: ['./trabajo-edit.component.css']
})

export class TrabajoEditComponent implements OnInit {
  trabajo: Trabajo;
  constructor( private route: ActivatedRoute,private datosPorfolio: TrabajoService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getTrabajo(id).subscribe(data =>{
      this.trabajo = data;
    });
  }

  onUpdate() {
    // Envia la petición de actualización al backend
    this.datosPorfolio.updateTrabajo(this.trabajo).subscribe(data => {
      console.log(data);
      alert('Trabajo actualizado!');
      this.router.navigate(['/dashboard']);
    });
  }

}