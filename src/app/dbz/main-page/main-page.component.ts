import { Component, Input } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  personajes: Personaje[]= [
    {
      nombre:'Goku',
      poder:15000
    },

    {
      nombre:'Vegueta',
      poder:7500
    },

  ];

  nuevo:Personaje={
    nombre:'maestro roshi',
    poder:1000
  }
}
