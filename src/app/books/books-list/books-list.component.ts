import { AfterContentInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Book } from 'src/app/models/book.interface';
import { SelectDirective } from 'src/app/shared/select.directive';
import { BooksItemComponent } from '../books-item/books-item.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'cn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, AfterContentInit {

  @ViewChildren(SelectDirective) selectDirectives: QueryList<SelectDirective>;
  @ViewChildren(BooksItemComponent) bookItems: QueryList<BooksItemComponent>;

  @ViewChild('searchInput', { static: true }) input: ElementRef;
    books$: Observable<Book[]>;
  constructor(private booksService: BooksService) {
    this.books$ = booksService.getAllBooks();
  }

  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'input')
    .pipe(
      debounceTime(400),
      map((ev: Event) => (ev.target as HTMLInputElement).value))
    .subscribe(q => this.books$ = this.booksService.filterBooks(q));
  }

  ngAfterContentInit() {
    // this.bookItems.changes.subscribe(c => console.log(c))
  }

  toggleSelections() {
    this.selectDirectives.forEach(selectDirective => {
      selectDirective.handleClick();
    });
  }

  toggleAllDescriptions() {
    this.bookItems.forEach(b => b.showDescription = !b.showDescription);
  }

}
