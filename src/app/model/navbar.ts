export class Navbar {
    id: number;
    github: string;
    instagram: string;
    linkedin: string;
    logo: string;


    constructor(id: number, github: string, instagram: string, linkedin: string, logo: string){
        this.id = id;
        this.github = github;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.logo = logo;
    }
}
