import { Component } from "@angular/core";


@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;

    //Si pongo un GET al metodo, se ve como si fuera un atributo
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    //Se llama asi desde el html: <dd> {{this.nombreCapitalizado}} </dd>

    obtenerNomber():String{

        //Es lo mismo que usar concat String tipo java solo que esto es mas choto
        return `${ this.nombre } - ${ this.edad }`;
    }


    cambiarNombre():void {

        this.nombre = 'Spiderman'
    }

    cambiarEdad():void {

        this.edad = 30;
    }

    

}