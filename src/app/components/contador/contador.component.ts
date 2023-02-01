import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor(){

  }
  ngOnInit(): void{

  }

  
  contador:number = 1;

  aumentar() {
    this.contador++;
  }

  disminuir() {
    this.contador--;
  }
}
