import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/services';
import { Car } from '../models/car.models';

@Component({
  selector: 'app-formulario-modificar-coche',
  templateUrl: './formulario-modificar-coche.component.html',
  styleUrls: ['./formulario-modificar-coche.component.css']
})
export class FormularioModificarCocheComponent implements OnInit{

  public carMod:Car 
  public modelos: string[]
  

  constructor(private userService: UserService, private router:Router){ 
    this.carMod = new Car();
    this.modelos = [];
  }

  ngOnInit(): void {
    this.carMod = this.userService.getCarMod();

    this.refreshModelo();
  }



  refreshModelo(){
    console.log("Marca: ",this.carMod.marca)

    switch(this.carMod.marca){
      case "fiat": this.modelos.splice(0,this.modelos.length);  this.modelos.push("500"); this.modelos.push("Panda"); break;
      case "alfa": this.modelos.splice(0,this.modelos.length); this.modelos.push("giulia"); this.modelos.push("stelvo"); break;
      case "citroen": this.modelos.splice(0,this.modelos.length); this.modelos.push("C8"); this.modelos.push("C9"); break;
      case "opel": this.modelos.splice(0,this.modelos.length); this.modelos.push("Corsa"); this.modelos.push("Crossland"); break;
      case "seat": this.modelos.splice(0,this.modelos.length); this.modelos.push("Ibiza"); this.modelos.push("Leon"); break;

      default: this.modelos.splice(0,this.modelos.length); break;
      
    }
    
  }

  clickModificar() {
    this.userService.modificarCar(this.carMod);
    this.clickVolver();
  }

  clickVolver() {
    this.router.navigate(['/listCar'])
  }


}
