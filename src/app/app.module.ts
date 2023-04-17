/*import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioInicioComponent } from './formulario-inicio/formulario-inicio.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormsModule } from '@angular/forms';
import { FormularioModificarUsuarioComponent } from './formulario-modificar-usuario/formulario-modificar-usuario.component';
import { FomularioPerfilComponent } from './fomulario-perfil/fomulario-perfil.component';
import { FormularioCrearCocheComponent } from './formulario-crear-coche/formulario-crear-coche.component';
import { FormularioListaCochesComponent } from './formulario-lista-coches/formulario-lista-coches.component';
import { FormularioModificarCocheComponent } from './formulario-modificar-coche/formulario-modificar-coche.component';



//const routes: Routes = [
  //{path: '', pathMatch: 'full', redirectTo: '/main'},
  //{path: 'main', component: FormularioRegistroComponent/*, ...canActivate(() => redirectUnauthorizedTo(['/register']))*/},
 // {path: 'login', component: FormularioLoginComponent},
  //{path: 'user', component: FormularioInicioComponent}

//];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioLoginComponent,
    FormularioInicioComponent,
    FormularioRegistroComponent,
    FormularioModificarUsuarioComponent,
    FomularioPerfilComponent,
    FormularioCrearCocheComponent,
    FormularioListaCochesComponent,
    FormularioModificarCocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    //RouterModule.forRoot(routes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
