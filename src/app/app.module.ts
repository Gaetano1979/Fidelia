import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotoComponent } from './components/foto/foto.component';
import { CargaComponent } from './components/carga/carga.component';
import { HomeComponent } from './components/home/home.component';
import { RutasPrimas } from './routes/routes.module';
import { environment } from '../environments/environment';

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
    RutasPrimas,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
