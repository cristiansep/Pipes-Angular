import { Component } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  nombre = 'Cristian';
  nombre2 = 'Crstian AleJAndro SePÚLveda Mendez';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 123.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'avenida siempe viva',
      casa: '10'
    }
  };

  valorDePromesa = new Promise((resolve , reject ) => {

          setTimeout(() => resolve('Llego la data'), 3500 );

  });

  fecha = new Date();

  video = 'JS2vSHg5638';

  activar: boolean = true;

}
