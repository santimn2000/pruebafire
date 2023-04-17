import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { Car } from '../models/car.models';

@Component({
  selector: 'app-formulario-lista-coches',
  templateUrl: './formulario-lista-coches.component.html',
  styleUrls: ['./formulario-lista-coches.component.css']
})
export class FormularioListaCochesComponent {


  cars: Car[]
  public car: Car = new Car()

  public modelos: string[] = []

  
  constructor(public userService: UserService, private router:Router){
    this.cars = [];
  }

  ngOnInit(): void {
    this.userService.getCars().subscribe(cars => {
      this.cars = cars;
      console.log(cars);
    })

    //this.userService.getIDByMail()

  }

  refreshModelo(){
    console.log("Marca: ",this.car.marca)

    switch(this.car.marca){
      case "fiat": this.modelos.splice(0,this.modelos.length);  this.modelos.push("500"); this.modelos.push("Panda"); break;
      case "alfa": this.modelos.splice(0,this.modelos.length); this.modelos.push("giulia"); this.modelos.push("stelvo"); break;
      case "citroen": this.modelos.splice(0,this.modelos.length); this.modelos.push("C8"); this.modelos.push("C9"); break;
      case "opel": this.modelos.splice(0,this.modelos.length); this.modelos.push("Corsa"); this.modelos.push("Crossland"); break;
      case "seat": this.modelos.splice(0,this.modelos.length); this.modelos.push("Ibiza"); this.modelos.push("Leon"); break;

      default: this.modelos.splice(0,this.modelos.length); break;
      
    }
    
  }
  
  correo:any = this.userService.getMail();

  consultar(){

      this.userService.resQuery.splice(0, this.userService.resQuery.length)
      //console.log(this.userService.resQuery.length)
      this.userService.consulta(this.car)//.then(fun => console.log(this.userService.resQuery.at(0)?.caballos))
      //console.log(this.userService.resQuery.at(0)?.caballos);

    

      

    
  }

  async ClickBorrar(car: Car){
    const resp = await this.userService.deleteCar(car);
    //console.log("aaaaaaa",resp);
  }

  ClickModificar(car: Car) {
    this.userService.setCarMod(car);
    this.router.navigate(['/modCar']);
  }


  irACrearCoche(){
    this.router.navigate(['/createCar']);
  }
  
  irAListaUsuarios(){
    this.router.navigate(['/user']);
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

}


