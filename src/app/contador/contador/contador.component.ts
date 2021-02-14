import {Component} from '@angular/core'

@Component({

    selector:'app-contador', //Como se llama el tag de este componente
    template: `
    
    <h1>{{titulo}}</h1> 
    <h3> La base es <strong>{{base}}</strong></h3>
    <button (click)="acumular(base)"> + {{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent{ //Clase que hay que declarar en el modulo


    public titulo: String = 'Contador App';

    base: number = 5
    
    numero: number = 10;
  
    acumular(valor:number){
  
      this.numero += valor;
    }

}