import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { User } from '../models/user.models';

@Component({
  selector: 'app-formulario-inicio',
  templateUrl: './formulario-inicio.component.html',
  styleUrls: ['./formulario-inicio.component.css']
})
export class FormularioInicioComponent implements OnInit{


  users: User[];

  constructor(private userService: UserService, private router:Router){
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    })

    //this.userService.getIDByMail()

  }
  
  correo:any = this.userService.getMail();


  async ClickBorrar(user: User){
    const resp = await this.userService.delete(user);
    console.log("aaaaaaa",resp);
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

  ClickModificar(user: User) {
    this.userService.setClienteMod(user);
    this.router.navigate(['/modUser']);
  }

  ClickVerPerfil(){
    this.router.navigate(['/viewUser']);
  }

  irAListaCoche(){
    this.router.navigate(['/listCar']);
  }

}
