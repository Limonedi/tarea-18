import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent
  ]
})
export class PagesModule { }
