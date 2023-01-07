export class Trabajo {
    id: number;
    empresa: string;
    image_trab: string;
    puesto: string;
    text_descrip: string;
    fecha_inicio: string;
    fecha_fin: string;

    constructor(id:number,empresa:string,image_trab:string,puesto:string, text_descrip:string, fecha_inicio:string, fecha_fin:string){
        this.id = id;
        this.empresa = empresa;
        this.image_trab =image_trab;
        this.puesto = puesto;
        this.text_descrip = text_descrip;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;

    }
}
