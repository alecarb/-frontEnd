import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup = new FormGroup({
  nombre: new FormControl(''),
  apellido: new FormControl(''),
  dni: new FormControl(''),
  domicilio: new FormControl(''),
  telefono: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl('')
  });
  submitted = false; //submitted/enviado
  //Inyectar el constructor en el formBuilder
  constructor(private formBuilder: FormBuilder, private router: Router) { 
  
    //Creamos el grupo de controles para el formulario de registro
    this.form=this.formBuilder.group({
    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    dni:['',[Validators.required]],
    domicilio:['',[Validators.required]],
    telefono:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
    });
    }

  ngOnInit(): void {}

  get nombre() {
    return this.form.get('nombre');
  }
  
  get apellido() {
    return this.form.get('apellido');
  }
  
  get dni() {
    return this.form.get('dni');
  }
  
  get domicilio() {
    return this.form.get('domicilio');
  }
  
  get telefono() {
    return this.form.get('telefono');
  }
  
  get email() {
    return this.form.get('email');
  }
  
  get password() {
    return this.form.get('password');
  }
  
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("¡Usuario registrado!")
      this.router.navigate(['/dashboard']) //esta linea de codigo redirecciona al dashboard. Se importa el modulo Router y se agrrega al constructor.

    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
      alert("Los datos ingresados no son validos")
      
    }
 
  }


  
}
  
  