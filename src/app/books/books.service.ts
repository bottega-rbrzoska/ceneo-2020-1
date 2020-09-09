import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable()
export class BooksService {

  private books: Book[] = [
    {
      id: '1',
      title: 'book1',
      pagesCount: 100,
      longDescription: 'Opis book 1'
    },
    {
      id: '2',
      title: 'book2',
      pagesCount: 200,
      longDescription: 'Opis book 2'
    },
    {
      id: '3',
      title: 'book3',
      pagesCount: 300,
      longDescription: 'Opis book 3'
    }
  ];
  constructor() { }

  getAllBooks(): Book[] {
    return this.books;
  }
}
