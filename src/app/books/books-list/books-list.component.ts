import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'cn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  constructor(private booksService: BooksService) {
    this.books = booksService.getAllBooks();
  }

  ngOnInit(): void {
  }

}
