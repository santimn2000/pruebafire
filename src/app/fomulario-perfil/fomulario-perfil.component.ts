import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';

@Component({
  selector: 'app-fomulario-perfil',
  templateUrl: './fomulario-perfil.component.html',
  styleUrls: ['./fomulario-perfil.component.css']
})
export class FomularioPerfilComponent {

  correo:any = this.userService.getMail();

  constructor(public userService: UserService, private router:Router){
    
  }



  ngOnInit(): void {

    
    console.log("ID usuario actual: ", this.userService.uid)
    console.log("Correo: ", this.userService.userActual.correo);
    
    /*
    this.userService.getDocById(this.userService.userActual.id)
    .then(nombre =>{
      this.userService.userActual.nombre = nombre
    })
    */
    

    
    //this.nombre = this.userService.userActual.nombre;
    //this.userService.getIDByMail()

  }

  ClickLogout(){
    this.userService.signout()
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log(error)
    });
  }

  clickAllUsers(){
    this.router.navigate(['/user']);
  }
}
