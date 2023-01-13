import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }  

  
  ngOnInit(): void {
    // Creamos el grupo de controles para el formulario de registro
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      authorities: ['', Validators.required]
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }


  get nombreUsuario() {
    return this.form.get('nombreUsuario');
  }
  
  
  get email() {
    return this.form.get('email');
  }
  
  get password() {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
  
    if (this.form.valid) {
      // Creamos un nuevo usuario con los datos del formulario 
      const newUser = new NuevoUsuario(
        this.form.get('nombre').value,
        this.form.get('nombreUsuario').value,
        this.form.get('email').value,
        this.form.get('password').value,
        this.form.get('authorities').value

        
      );
  
      // Llamamos al método del servicio para crear un nuevo usuario
      this.authService.createUser(newUser).subscribe(
        res => {
          // Si el usuario se ha creado correctamente, mostramos un mensaje de éxito y redirigimos al dashboard
          alert("¡Usuario registrado!");
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Si ha ocurrido algún error, mostramos un mensaje de error
          console.log(error);
          alert("Error al registrar usuario");
        }
      );
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.submitted = true;
    }
  }
    

}