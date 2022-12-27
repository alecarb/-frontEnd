import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from '../model/login-usuario';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { JwtDto } from '../model/jwt-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginForm: FormGroup;
  errMesj: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService, 
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.router.navigate(['']);
    }
  }

  onSubmit() {
    const loginUsuario = new LoginUsuario(
      this.loginForm.value.nombreUsuario,
      this.loginForm.value.password
    ); 
    this.authService.login(loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate([''])
      },
      err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMesj = err.error.mensaje;
        console.log(this.errMesj);
      }
    );
  }}

/*
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMesj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.router.navigate(['']);
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMesj = err.error.mensaje;
        console.log(this.errMesj);
      }
    );
  }
}
*/
/*     form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false; 
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {    

    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
      password:['',[Validators.required, Validators.maxLength(8)]],
      email:['',[Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault(); 
  
    if (this.form.valid) {
      // Creamos un objeto de inicio de sesión a partir de los valores del formulario
      const loginUser = new LoginUsuario(
        this.form.value.nombreUsuario,
        this.form.value.password
      );
  
      // Llamamos al método de inicio de sesión del servicio de autenticación
      this.authService.login(loginUser).subscribe(
        (jwt: JwtDto) => {
          // Si la solicitud de inicio de sesión tiene éxito, almacenamos el token JWT en el almacenamiento local del navegador
          sessionStorage.setItem('jwt', jwt.token);
          // Redirigimos al usuario al dashboard
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Si la solicitud de inicio de sesión falla, mostramos un mensaje de error al usuario
          alert('Error al iniciar sesión: nombre de usuario o contraseña incorrectos');
        }
      );
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
 */
