import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditpersonaComponent } from './components/sobre-mi/editpersona.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"editper/:id" , component:EditpersonaComponent},
  {path:"editexp/:id" , component:EditExperienciaComponent},
  {path:'nuevaedu', component:NewEducacionComponent},
  {path:'editedu/:id', component:EditEducacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
