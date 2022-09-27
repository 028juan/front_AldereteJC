import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditpersonaComponent } from './components/sobre-mi/editpersona.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"editper/:id" , component:EditpersonaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
