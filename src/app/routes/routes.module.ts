import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoComponent } from '../components/foto/foto.component';
import { CargaComponent } from '../components/carga/carga.component';
import { HomeComponent } from '../components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasPrimas {}
