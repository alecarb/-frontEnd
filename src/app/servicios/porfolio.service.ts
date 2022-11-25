import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { //2 inyecto el servicio httpClient

   }
   obtenerDatos(): Observable<any>{ // 3 se declara el metodo que va a traer los datos y se lo declara como observable para que los componentes que lo consuman no se detengan y esperen la rta del servidor
    return this.http.get('../assets/data/data.json'); // tiene q retornar un Observable y devuelve el Json
  }


}
