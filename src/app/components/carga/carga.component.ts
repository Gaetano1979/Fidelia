import { Component, OnInit } from '@angular/core';
import { FotoItems } from '../../models/foto-items';
import { CargafotoService } from '../../services/cargafoto.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: FotoItems[] = [];
  p: File;

  constructor(public foto: CargafotoService) { }

  ngOnInit() {
  }

  Cargar(file: File) {
    console.log('enviar archivo', file.name);
    this.foto.cargarImagenesFire(this.archivos);
    
  }
  prueba(evento: any) {
    console.log(evento);
    
  }

}
