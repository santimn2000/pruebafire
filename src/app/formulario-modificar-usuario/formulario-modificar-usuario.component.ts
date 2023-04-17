import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { User } from '../models/user.models';

@Component({
  selector: 'app-formulario-modificar-usuario',
  templateUrl: './formulario-modificar-usuario.component.html',
  styleUrls: ['./formulario-modificar-usuario.component.css']
})
export class FormularioModificarUsuarioComponent implements OnInit{

  public userMod: User;

  constructor(private userService: UserService, private router:Router){ 
    this.userMod = new User();;
  }

  ngOnInit(): void {
    this.userMod = this.userService.getUserMod();
  }

  clickModificar() {
    this.userService.modificarUser(this.userMod);
  }

  clickVolver() {
    this.router.navigate(['/user'])
  }


}
