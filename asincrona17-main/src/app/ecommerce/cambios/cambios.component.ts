import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent implements OnInit {
  valores=new Array;//almacena el array como tal
  cadena = "";//almacena informacion de la url
  idProducto = 0;
  //sector de entrada inputs
  cod =0;
  des='';
  precVent=0;
  precComp=0;
  exist=0;
  nuevoArr = new Array;
//-----------------------
  codigos=0;
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(){
    this.idProducto = this.ruta.snapshot.params['id'];
    this.cadena = this.ruta.snapshot.params['objeto'];
    this.valores = JSON.parse(this.cadena);
  }
//boton para activar el boton guardar
habilitado:any=true;
habilitado2:any=false;
habilitado3:any=true;
confirmacion:any;
habilitar(){
  this.confirmacion = confirm("desea Modificar?");
  if(this.confirmacion===true){
    this.habilitado=false;
    this.habilitado2=true;
    this.habilitado3=false;
  }
}
}
