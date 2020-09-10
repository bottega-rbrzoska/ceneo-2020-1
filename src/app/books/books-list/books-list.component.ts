import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'cn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) input: ElementRef;
    books: Book[];
  constructor(private booksService: BooksService) {
    this.books = booksService.getAllBooks();
  }

  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'input')
    .pipe(
      debounceTime(400),
      map((ev: Event) => (ev.target as HTMLInputElement).value))
    .subscribe(q => this.books = this.booksService.filterBooks(q));
  }

}
