import { Component, OnInit } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../servicios-de-la-empresa.service';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

  export class ServiciosComponent implements OnInit {
    servicios:Servicio[] = [];
  
  constructor(private servicioService:ServiciosDeLaEmpresaService){}

  ngOnInit():void{
    this.obtenerServicios();
  }

obtenerServicios(): void {
    this.servicioService.obtenerServicios().subscribe(
      (response:any) => {
        this.servicios = response; // Asignamos los servicios al array
        console.log('Servicios obtenidos:', this.servicios);
      }, 
      (error) => {
        console.error('Error al obtener los servicios:', error);
      }
    );
  }
}
