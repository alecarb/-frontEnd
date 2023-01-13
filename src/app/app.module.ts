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
import { TrabajoNewComponent } from './modales-new/trabajo-new/trabajo-new.component';
import { DashboardEducacionComponent } from './dashboard/dashboard-educacion/dashboard-educacion.component';
import { EducacionEditComponent } from './modales-edicion/educacion-edit/educacion-edit.component';
import { EducacionNewComponent } from './modales-new/educacion-new/educacion-new.component';
import { DashboardSoftSkillsComponent } from './dashboard/dashboard-soft-skills/dashboard-soft-skills.component';
import { SoftSkillsEditComponent } from './modales-edicion/soft-skill-edit/soft-skill-edit.component';
import { SoftSkillsNewComponent } from './modales-new/soft-skill-new/soft-skill-new.component';
import { DashboardHardSkillsComponent } from './dashboard/dashboard-hard-skills/dashboard-hard-skills/dashboard-hard-skills.component';
import { HardSkillsNewComponent } from './modales-new/hard-skill-new/hard-skill-new.component';
import { HardSkillsEditComponent } from './modales-edicion/hard-skill-edit/hard-skill-edit.component';
import { NavbarEditComponent } from './modales-edicion/navbar-edit/navbar-edit.component';
import { NavbarNewComponent } from './modales-new/navbar-new/navbar-new.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardPersonaComponent } from './dashboard/dashboard-persona/dashboard-persona.component';
import { PersonaEditComponent } from './modales-edicion/persona-edit/persona-edit.component';
import { PersonaNewComponent } from './modales-new/persona-new/persona-new.component';
import { AcercaMiNewComponent } from './modales-new/acerca-mi-new/acerca-mi-new.component';
import { AcercaMiEditComponent } from './modales-edicion/acerca-mi-edit/acerca-mi-edit.component';
import { DashboardAcercaMiComponent } from './dashboard/dashboard-acerca-mi/dashboard-acerca-mi.component';


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
    TrabajoNewComponent,
    DashboardEducacionComponent,
    EducacionEditComponent,
    EducacionNewComponent,
    DashboardSoftSkillsComponent,
    SoftSkillsEditComponent,
    SoftSkillsNewComponent,
    DashboardHardSkillsComponent,
    HardSkillsNewComponent,
    HardSkillsEditComponent,
    NavbarEditComponent,
    NavbarNewComponent,
    DashboardNavbarComponent,
    DashboardPersonaComponent,
    PersonaEditComponent,
    PersonaNewComponent,
    AcercaMiNewComponent,
    AcercaMiEditComponent,
    DashboardAcercaMiComponent,


   
  
     
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
