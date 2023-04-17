import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { IUser, User } from '../models/user.models';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit{
  /*
  public correo: string = "";
  public contrasena: string = "";
  public nombre : string = "";
  public apellidos: string = "";
  public telefono: string = "";
*/
  public user: User = new User()

  title = 'PrimerProyecto';

  constructor(private userService: UserService, private router:Router){}

  ngOnInit(): void {
    
  }

  pruebaReg(){
    //console.log("Usuario con ngModel ",this.user);

    console.log("Registro -> correo: "+this.user.correo+"\ncontraseña: "+this.user.contrasena);
    this.userService.register(this.user.correo, this.user.contrasena)
      .then(response => {
        console.log(response);

        //this.userService.guardarCliente(response.user.uid, this.user.nombre, this.user.apellidos, this.user.telefono, this.user.correo, this.user.contrasena);
        this.userService.guardarCliente(response.user.uid, this.user);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error)
      });
  }

  clickRegistro(){
    /*
    this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    this.apellidos = (<HTMLInputElement>document.getElementById("apellidos")).value;
    this.telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
    this.correo = (<HTMLInputElement>document.getElementById("correo")).value;
    this.contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;


    const user = {
      "Nombre": this.nombre,
      "Apellidos": this.apellidos,
      "Telefono": this.telefono,
      "Correo": this.correo,
      "Contraseña": this.contrasena
    }
    

    console.log("Registro -> correo: "+this.correo+"\ncontraseña: "+this.contrasena);
    this.userService.register(this.correo, this.contrasena)
      .then(response => {
        console.log(response);

        this.userService.guardarCliente(this.nombre, this.apellidos, this.telefono, this.correo, this.contrasena);

        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error)
      });
    */
  }

  clickYatengoCuenta(){
    this.router.navigate(['/login']);
  }
}
