import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FotoItems } from '../models/foto-items';



@Injectable({
  providedIn: 'root'
})
export class CargafotoService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) { 

    
  }
  cargarImagenesFire(imgenes: FotoItems[]) {
    console.log(imgenes);
    
  }

  private subirImg(imagen: {nombre: string, url: string}) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }
}
