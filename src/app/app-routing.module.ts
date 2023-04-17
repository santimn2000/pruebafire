import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AppComponent } from './app.component'
import { FormularioInicioComponent } from './formulario-inicio/formulario-inicio.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioModificarUsuarioComponent } from './formulario-modificar-usuario/formulario-modificar-usuario.component';
import { FomularioPerfilComponent } from './fomulario-perfil/fomulario-perfil.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { FormularioCrearCocheComponent } from './formulario-crear-coche/formulario-crear-coche.component';
import { FormularioListaCochesComponent } from './formulario-lista-coches/formulario-lista-coches.component';
import { FormularioModificarCocheComponent } from './formulario-modificar-coche/formulario-modificar-coche.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main'},
  {path: 'main', component: FormularioRegistroComponent},
  {path: 'login', component: FormularioLoginComponent},
  {path: 'user', component: FormularioInicioComponent,  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'modUser', component: FormularioModificarUsuarioComponent,  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'viewUser', component: FomularioPerfilComponent,  ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'createCar', component: FormularioCrearCocheComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'listCar', component: FormularioListaCochesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'modCar', component: FormularioModificarCocheComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
