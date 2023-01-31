import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CambiosComponent } from './cambios/cambios.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    ProductosComponent,
    CambiosComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    ProductosComponent,
    CambiosComponent,
    HeaderComponent
  ]
})
export class EcommerceModule { }
