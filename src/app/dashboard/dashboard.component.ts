import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
declare var window: any; //2 instancio variable 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
 
})
export class DashboardComponent implements OnInit {
  miPorfolio:any; 
  formModal: any; //1 creo el atributo para el modal

  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio= data;
    });
    
    //2 creo el objeto modal, le paso el id del modal
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("edit-redes")
    );


  }
  openModal(){ //3 creo el metodo que le asociamos al boton para abrir el modal
    this.formModal.show()
  }
  
  doSomething(){ //5 creo otro metodo que se le asocia al boton del modal
    this.formModal.hide();
  }
  // luego en el html se colocan los metodos asociandolos 
  //al (click) esto en la etiqueta botton
  //openModal() va en el boton que abre
  //doSomething va en el boton del modal save change
}
