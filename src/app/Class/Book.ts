import { IBook } from '../Interfaces/IBooks';

export class Book implements IBook{

    public edition: number;
    public format: number;
    public isbn: number;
    public releaseDate: Date;
    public name: string;
    public description: string;
    public star: number;
    public image: string;
    public arquivo: string;
    public details: boolean;

    constructor(book : IBook){
        this.edition = book.edition;
        this.format = book.format;
        this.isbn = book.isbn;
        this.releaseDate = book.releaseDate;
        this.name = book.name;
        this.description = book.description;
        this.star = book.star;
        this.image = book.image;
        this.arquivo = book.arquivo;
        this.details = book.details;
    }

    addStar(qtd : number) : boolean {
        this.star++;
        return true;
    }

    changeDetails() : void {
        this.details = !this.details;
    }
}