import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { Car } from '../models/car.models';

@Component({
  selector: 'app-formulario-crear-coche',
  templateUrl: './formulario-crear-coche.component.html',
  styleUrls: ['./formulario-crear-coche.component.css']
})
export class FormularioCrearCocheComponent {

  public car: Car = new Car()

  public modelos: string[] = []

  constructor(private userService: UserService, private router:Router){}

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


  getNewID():string {
    
    var myDate = new Date();
    var varID = myDate.getDay() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();
    if (varID.length > 15) {
      varID = varID.substr(0, 15);
    }
    return varID;
    
}

  addCar(){
    this.userService.guardarCoche(this.getNewID(), this.car);
    this.router.navigate(['/listCar']);
  }

  back(){
    this.router.navigate(['/user'])
  }
  

}
