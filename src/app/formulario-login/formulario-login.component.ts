import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  public correo: string = "";
  public contrasena: string = "";
  title = 'PrimerProyecto';

  constructor(private userService: UserService, private router:Router){}

  clickLogin(){
    
    this.correo = (<HTMLInputElement>document.getElementById("correo")).value;
    this.contrasena = (<HTMLInputElement>document.getElementById("contrasena")).value;

    console.log("Login -> correo: "+this.correo+"\ncontraseña: "+this.contrasena);
    this.userService.login(this.correo, this.contrasena)
      .then(response => {
        console.log(response);
        this.userService.setUID();

        this.userService.getUserDoc(this.userService.uid).subscribe((value) => {
          console.log("Nuevo: ",value);
          //this.user = value
          this.userService.userActual = value
          
        })


        this.router.navigate(['/user']);
      })
      .catch(error => {
        console.log(error)
      });
  }

  clickIrARegistrarse(){
    this.router.navigate(['/main']);
  }
}
