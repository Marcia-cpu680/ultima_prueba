import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class ServiciosDeLaEmpresaService {
  backend = environment.backend+"/servicio-empresa";

  constructor(private Http:HttpClient){}


   obtenerServicios(){
    return this.Http.get(`${this.backend}/obtener-servicios-empresa`);

   }
  
  }




