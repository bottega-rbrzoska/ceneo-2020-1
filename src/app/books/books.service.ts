import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable()
export class BooksService {

  private books: Book[] = [
    {
      id: '1',
      title: 'boobowwwwww wwwwswswsokk1',
      pagesCount: 100,
      longDescription: 'Opis bowwwwww wwwwswswsok 1'
    },
    {
      id: '2',
      title: 'boasdasdsa asdsadok2',
      pagesCount: 200,
      longDescription: 'Opis book 2'
    },
    {
      id: '3',
      title: 'boowwsswwwwwsswswsk3',
      pagesCount: 300,
      longDescription: 'Opis book 3'
    }
  ];
  constructor() { }

  getAllBooks(): Book[] {
    return this.books;
  }

  filterBooks(query): Book[] {
    return this.books.filter(b => b.title.includes(query));
  }
}
