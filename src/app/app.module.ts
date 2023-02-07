import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.componet'; 
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent, EmpleadoComponent, ContadorComponent, BotonesComponent, FormularioComponent, SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
