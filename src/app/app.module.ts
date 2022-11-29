import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { RegistroComponent } from './registro/registro.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EstudiosComponent,
    SeccionesComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    DashboardComponent,
    IndexComponent,
    LoginComponent,
    Error404Component,
    RegistroComponent,
    AcercaDeMiComponent,
    ExperienciaLaboralComponent
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
   
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
