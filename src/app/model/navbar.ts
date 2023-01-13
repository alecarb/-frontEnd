export class Navbar {
    id: number;
    nombre:string;
    red:string
    logo: string;


    constructor(id: number,nombre: string,red: string, logo: string){
        this.id = id;
        this.nombre = nombre;
        this.red=red;
        this.logo = logo;
    }
}
