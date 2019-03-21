import { Component, OnInit } from "@angular/core";
import { IBook, Book } from '../Interfaces/Books';

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
  constructor() {
    this.filteredBooks = this.books;
  }

  ngOnInit() {}

  searchFilter: string = "";
  showDetails: boolean = false;
  imageWidth:  number = 50;
  imageMargin: number = 2;
  filteredBooks: IBook[];
  _listFilter: string;
  
  get listFilter(): string {
     return this._listFilter;
  }
  set listFilter(value : string){
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  books: IBook[] = [
    {
      edition: 2,
      format: 2,
      isbn: 455,
      releaseDate: new Date(2019, 10, 10),
      name: "A arte de amar (Love comes west) - Barbara Cartland",
      description: "A arte de amar (Love comes west) - Barbara Cartland",
      star: 3.2,
      image: "http://placehold.it/200x300",
      arquivo: "A arte de amar (Love comes west) - Barbara Cartland - 455.doc",
      details: false
    },
    {
      edition: 2,
      format: 3,
      isbn: 271,
      releaseDate: new Date(2018, 10, 10),
      name: "Farsa inocente (The windmill of love) - Barbara Cartland",
      description: "Farsa inocente (The windmill of love) - Barbara Cartland",
      star: 4.2,
      image: "http://placehold.it/200x300",
      arquivo: "Farsa inocente (The windmill of love) - Barbara Cartland - 271.doc",
      details: false
    }
  ];

  toggleDetails(book : Book): void{
    book.changeDetails();
  }
  performFilter(filterBy: string){
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter((book : IBook) => book.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
