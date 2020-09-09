import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'cn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [
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

  ngOnInit(): void {
  }

}
