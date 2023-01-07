import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { EducacionComponent } from './educacion/educacion.component';
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
import { interceptorProvider } from './service/interceptor-service';
import { SoftSkillComponent } from './soft-skill/soft-skill.component';
import { AuthGuard } from './auth.guard';
import { DashboardExpLabComponent } from './dashboard/dashboard-exp-lab/dashboard-exp-lab.component';
import { TrabajoEditComponent } from './modales-edicion/trabajo-edit/trabajo-edit.component';
import { TrabajoDeleteComponent } from './modales-delete/trabajo-delete/trabajo-delete.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EducacionComponent,
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
    ExperienciaLaboralComponent,
    SoftSkillComponent,
    DashboardExpLabComponent,
    TrabajoEditComponent,
    TrabajoDeleteComponent,

   
  
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
   
   
  ],
  providers:[
    interceptorProvider,
    AuthGuard
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
