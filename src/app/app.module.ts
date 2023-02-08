import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.componet'; 
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BotonesComponent } from './components/botones/botones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SwitchComponent } from './components/switch/switch.component';
import { FormularioPlantillaComponent } from './components/formulario-plantilla/formulario-plantilla.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { ChildrenComponent } from './components/children/children.component';
import { AddMessageComponent } from './components/add-message/add-message.component';
import { ListMessageComponent } from './components/list-message/list-message.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,EmpleadosComponent, EmpleadoComponent, ContadorComponent, BotonesComponent, FormularioComponent, SwitchComponent, FormularioPlantillaComponent, FormularioReactivoComponent, ChildrenComponent, AddMessageComponent, ListMessageComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
