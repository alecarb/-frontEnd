import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {
  educacion: Educacion;
  constructor(private route: ActivatedRoute,private datosPorfolio: EducacionService, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.datosPorfolio.getEducacion(id).subscribe(data=>{
      this.educacion = data;
    });
  }

  onUpdate(){
    this.datosPorfolio.updateEducacion(this.educacion).subscribe(data => {
      console.log(data);
      alert('Educacion actualizada!');
      this.router.navigate(['/dashboard']);
    });

  }

}
