import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotoComponent } from './components/foto/foto.component';
import { CargaComponent } from './components/carga/carga.component';
import { HomeComponent } from './components/home/home.component';
import { RutasPrimas } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FotoComponent,
    CargaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RutasPrimas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
