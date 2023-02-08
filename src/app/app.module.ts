import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.componet'; 
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SwitchComponent } from './switch/switch.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent, EmpleadoComponent, ContadorComponent, BotonesComponent, FormularioComponent, SwitchComponent, FormularioPlantillaComponent, FormularioReactivoComponent, ChildrenComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
