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

const routes: Routes = [
  //constantes de rutas en orden de navegacion
  {path: '', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/trabajoedit/:id', component: TrabajoEditComponent },
  {path: 'dashboard/trabajonew/new', component: TrabajoNewComponent},
  {path:'registro', component: RegistroComponent},
  {path:'index', component: IndexComponent},
  {path: '**', component:Error404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
