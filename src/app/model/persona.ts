export default class Persona {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  residencia: string;
  dni: number;

  constructor(id: number,nombre: string,apellido: string,telefono: string,email: string,residencia: string,dni: number
  ) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
    this.residencia = residencia;
  }
}
