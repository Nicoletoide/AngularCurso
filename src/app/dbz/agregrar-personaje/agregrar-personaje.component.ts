import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregrar-personaje',
  templateUrl: './agregrar-personaje.component.html',
  styleUrls: ['./agregrar-personaje.component.css']
})
export class AgregrarPersonajeComponent {

  
  @Input()
  nuevo: Personaje = {
    nombre: "", poder: 0
  } ;

  //Declaro un evento de salida, que cuando se cargue se genere q va rertonar el personaje creado
  @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();


  
  agregar(){

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }   

    console.log(this.nuevo);  
    //emito el evento para avisar q lo genere y le mando lo que cree
    this.onNuevoPersonaje.emit(this.nuevo);
    
    

    //Lo creo de nuevo vacio para que no quede conectado a la lista
    this.nuevo = {

      nombre: "",
      poder: 0

    }
    
  }

}
