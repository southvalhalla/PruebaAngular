import { Component } from '@angular/core';

import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  constructor(){

  }
  ngOnInit(): void{

  }

  // nombre:string = 'Alejandro';

  //con objetos
  
  persona:Persona = {
    nombre : 'Alejandro',
    apellido : 'De Sinope',
    edad: 21
  }

}
