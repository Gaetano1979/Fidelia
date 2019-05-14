export class FotoItems {

    public archivo: File;
    public nombreArchivo: string;
    public url: string;
    public estasubiendo: boolean;
    public progresso: number;

    constructor(archivo: File) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.estasubiendo = false;
        this.progresso = 0;
    }
}
