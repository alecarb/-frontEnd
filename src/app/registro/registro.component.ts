import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  titulo_registro: string = "Complete los campos para el registro";

  constructor() { }

  ngOnInit(): void {
  }

}
