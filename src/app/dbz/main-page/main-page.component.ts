import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregrarPersonajeComponent } from '../agregrar-personaje/agregrar-personaje.component';
import { DbzService } from '../services/dbz.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  constructor( private dbzService: DbzService){
  
  }

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }


  
  nuevo: Personaje = {
    nombre: "", poder: 0
  } ;


  //Cuando el Hijo manda evento cae ACA y lo inserto
  agregarNuevoPersonaje( argumento: Personaje){
    

    console.log(argumento);    
    this.personajes.push(argumento);
    


  }


}
