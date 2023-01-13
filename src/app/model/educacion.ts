export class Educacion {
    id: number;
    //image_est: string;
    titulo: string;
    fecha_inicio: string;
    fecha_fin: string;
    //en_curso: boolean;
    institucion: string;
    
    //declarar image_est en ele constructor si se utiliza
    constructor(titulo: string, fecha_inicio: string, fecha_fin: string, institucion: string){
        //this.image_est = image_est;
        this.titulo = titulo;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        //this.en_curso = en_curso;
        this.institucion = institucion;
    }
}
