import { Directive, EventEmitter, ElementRef, HostListener , Input, Output } from '@angular/core';
import { FotoItems } from '../models/foto-items';

@Directive({
  selector: '[appEnvioFile]'
})
export class EnvioFileDirective {

  @Input() archivos: FotoItems[] = [];

  @Output() onFocusEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('click', ['$event'])
  public onFocusEvento(event: any) {
    this.onFocusEvent.emit( true );
    const trasferencia = this._getTrasferencia( event );
    if (!trasferencia) {
      return;
    }
    this.estraerArchivo( trasferencia.files );
    this._prevenir(event);
  }

  // validaciones
  private puedeenviar(archivo: File): boolean {
    if (!this._archivoYaesta(archivo.name) && this._esImg(archivo.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _getTrasferencia(event: DragEventInit | DragEvent ) {
    return event.dataTransfer;
  }

  private _prevenir(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private estraerArchivo(archivoLista: FileList ) {
    console.log(archivoLista);
    
  }

  private _archivoYaesta(nombre: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombre) {
        console.log('Archivo' + nombre + 'esta agreagado');
        return true;
      }
    }
    return false;
  }

  private _esImg(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }

}
