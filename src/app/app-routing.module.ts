import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EducacionComponent } from './educacion/educacion.component';
import { AuthGuard } from './auth.guard';
import { TrabajoEditComponent } from './modales-edicion/trabajo-edit/trabajo-edit.component';
import { TrabajoNewComponent } from './modales-new/trabajo-new/trabajo-new.component';
import { EducacionEditComponent } from './modales-edicion/educacion-edit/educacion-edit.component';
import { EducacionNewComponent } from './modales-new/educacion-new/educacion-new.component';
import { SoftSkillsEditComponent } from './modales-edicion/soft-skill-edit/soft-skill-edit.component';
import { SoftSkillsNewComponent } from './modales-new/soft-skill-new/soft-skill-new.component';
import { HardSkillsEditComponent } from './modales-edicion/hard-skill-edit/hard-skill-edit.component';
import { HardSkillsNewComponent } from './modales-new/hard-skill-new/hard-skill-new.component';
import { NavbarNewComponent } from './modales-new/navbar-new/navbar-new.component';
import { NavbarEditComponent } from './modales-edicion/navbar-edit/navbar-edit.component';
import { PersonaEditComponent } from './modales-edicion/persona-edit/persona-edit.component';
import { PersonaNewComponent } from './modales-new/persona-new/persona-new.component';
import { AcercaMiEditComponent } from './modales-edicion/acerca-mi-edit/acerca-mi-edit.component';
import { AcercaMiNewComponent } from './modales-new/acerca-mi-new/acerca-mi-new.component';

const routes: Routes = [
  //constantes de rutas en orden de navegacion
  {path: '', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate :[AuthGuard] },
  {path: 'dashboard/trabajoedit/:id', component: TrabajoEditComponent },
  {path: 'dashboard/trabajonew/new', component: TrabajoNewComponent},
  {path: 'dashboard/educacionedit/:id', component: EducacionEditComponent},
  {path: 'dashboard/educacionnew/new', component: EducacionNewComponent},
  {path: 'dashboard/softSkilledit/:id', component: SoftSkillsEditComponent},
  {path: 'dashboard/softSkillnew/new', component: SoftSkillsNewComponent},
  {path: 'dashboard/hardSkilledit/:id', component: HardSkillsEditComponent},
  {path: 'dashboard/hardSkillnew/new', component: HardSkillsNewComponent},
  {path: 'dashboard/navbarnew/new', component: NavbarNewComponent},
  {path: 'dashboard/navbaredit/:id', component: NavbarEditComponent},
  {path: 'dashboard/personanew/new', component: PersonaNewComponent},
  {path: 'dashboard/personaedit/:id', component: PersonaEditComponent},
  {path: 'dashboard/acerca-miedit/:id', component: AcercaMiEditComponent},
  {path: 'dashboard/acerca-minew/new', component: AcercaMiNewComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'index', component: IndexComponent},
  {path: '**', component:Error404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
