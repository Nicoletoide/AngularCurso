import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  constructor(private dbzService: DbzService){}

  //Esto indica que Persojanes me va venir desde el componente Padre.
  @Input()
  personajesInput: Personaje[] = [];


}
