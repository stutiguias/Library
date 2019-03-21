export interface IBook {
    edition: number;
    format: number;
    isbn: number;
    releaseDate: Date;
    name: string;
    description: string;
    star: number;
    image: string;
    arquivo: string;
    details: boolean;
}

export class Book implements IBook{

    constructor(public edition: number,
                public format: number,
                public isbn: number,
                public releaseDate: Date,
                public name: string,
                public description: string,
                public star: number,
                public image: string,
                public arquivo: string,
                public details: boolean){

    }

    addStar(qtd : number) : boolean {
        this.star++;
        return true;
    }

    changeDetails() : void {
        this.details = !this.details;
    }
}