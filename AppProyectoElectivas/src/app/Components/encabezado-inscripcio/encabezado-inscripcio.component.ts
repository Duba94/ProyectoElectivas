import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../Services/login.service';
import { RegistroDatosService } from '../../Services/registro-datos.service'
@Component({
  selector: 'app-encabezado-inscripcio',
  templateUrl: './encabezado-inscripcio.component.html',
  styleUrls: ['./encabezado-inscripcio.component.css']
})
export class EncabezadoInscripcioComponent implements OnInit {
  imagenPerfil: string;
  info:any;
  usuario:string;
  rol:string;
  usuarios=new Array();
  cargo:string;
  constructor(private servicioLogin: LoginService,private datos:RegistroDatosService) {

   }

  ngOnInit() {
  
    this.servicioLogin.obtenerDatosUsuario().subscribe(res => {
      console.log("info",res);
      this.info=res;
      console.log(this.info.foto);
      this.imagenPerfil = this.info.foto;
      this.usuario=this.info.correo;
      for(var l in this.usuarios){
        debugger;
        if(this.usuarios[l].Correo==this.info.correo)
        {
         this.cargo= this.usuarios[l].Cargo;
         this.rol= this.usuarios[l].rol;
          break;
        
        }
      }
    });
  }
 

}
