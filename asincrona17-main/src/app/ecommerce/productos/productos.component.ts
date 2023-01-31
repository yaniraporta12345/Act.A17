import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos=[
    {id:1,codigo:101,descripcion:'galletas koqui',precioCompra:10,precioVenta:15,ganancia:5,existencia:100},
    {id:2,codigo:102,descripcion:'mermelada de fresa',precioCompra:15,precioVenta:15,ganancia:15,existencia:100},
    {id:3,codigo:103,descripcion:'Aceite',precioCompra:18,precioVenta:15,ganancia:4,existencia:100},
    {id:4,codigo:104,descripcion:'maiz',precioCompra:8,precioVenta:15,ganancia:6,existencia:100},
    {id:5,codigo:105,descripcion:'Doritos',precioCompra:4,precioVenta:15,ganancia:2,existencia:100}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
