import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotoComponent } from '../components/foto/foto.component';
import { CargaComponent } from '../components/carga/carga.component';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    FotoComponent,
    CargaComponent,
    HomeComponent
  ],
  exports: [
    FotoComponent,
    CargaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
