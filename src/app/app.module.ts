import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { RegistroComponent } from './registro/registro.component';

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
    RegistroComponent
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
