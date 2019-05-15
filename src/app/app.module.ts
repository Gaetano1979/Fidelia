import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// modulo de Rutas
import { RutasPrimas } from './routes/routes.module';
import { PaginasModule } from './paginas/paginas.module';
import { FireModule } from './fire/fire.module';
import { EnvioFileDirective } from './directives/envio-file.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnvioFileDirective,
    
  ],
  imports: [
    BrowserModule,
    PaginasModule,
    RutasPrimas,
    FireModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
