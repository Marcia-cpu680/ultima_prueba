import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos/solicitudes-contactos.component';
import { SolicitudFormularioService } from './servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosDeLaEmpresaService } from './servicios/tecnicos-de-la-empresa.service';
import { ServiciosDeLaEmpresaService } from './servicios-de-la-empresa.service';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    FooterComponent,
    SolicitudesContactosComponent,
    ServiciosComponent
  
    
  ],
  imports: [
  
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],

  providers: [
    SolicitudFormularioService,
    TecnicosDeLaEmpresaService,
    ServiciosDeLaEmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
