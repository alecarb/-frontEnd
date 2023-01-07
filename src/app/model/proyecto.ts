export class Proyecto {
    id: number;
    proyecto: string;
    image_proy: string;
    descripcion: string;

    constructor(id: number, proyecto: string, image_proy: string, descripcion: string){
        this.id = id;
        this.proyecto = proyecto;
        this.image_proy = image_proy;
        this.descripcion = descripcion;
    }

}
