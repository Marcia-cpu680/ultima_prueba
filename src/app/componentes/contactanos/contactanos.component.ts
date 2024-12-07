import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { TecnicosDeLaEmpresaService } from '../../servicios/tecnicos-de-la-empresa.service';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls:[ './contactanos.component.css']
})

export class ContactanosComponent implements OnInit {
  tecnicos: any[] = [];
  formularioForm:FormGroup
  datos_formulario:any;

  constructor (
    private formBuild: FormBuilder,
    private solicitudFormularioSrv:SolicitudFormularioService,
    private TecnicosDeLaEmpresaSrv:TecnicosDeLaEmpresaService
   ) {

    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit():void{
    this.obtenerTecnicos();
     
    }

    enviarFormulario(formularioData: any): void {
      this.solicitudFormularioSrv.registrarFormulario(formularioData).subscribe(
        (response: any) => {
          console.log('Formulario enviado correctamente:', response);
          alert('Formulario enviado correctamente.');
          this.formularioForm.reset();
        },
          (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Ocurrió un error al enviar el formulario.');
         } 
    );
   }

  obtenerTecnicos():void {
    this.TecnicosDeLaEmpresaSrv.ObtenerTecnicos().subscribe(
      (response:any) =>{
        console.log('Tecnicos obtenidos:',response);
        this.tecnicos = response.profesionales;
      },
      (error) => {
        console.error('error al obtner tecnicos:',error);
      }
    );
   }

  }

