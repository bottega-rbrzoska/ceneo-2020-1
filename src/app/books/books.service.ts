import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { BookState } from '../models/book-state.interface';
import { Book } from '../models/book.interface';

@Injectable()
export class BooksService {
  private initialBookState: BookState = {
    booksList: [],
    selectedBook: null,
    isLoading: false,
    loadError: null,
  };
  private bookStateSubj = new BehaviorSubject<BookState>(this.initialBookState);
  private stateHistory: { action: string; state: BookState }[] = [
    { action: 'APP_INIT', state: this.initialBookState },
  ];

  bookState$ = this.bookStateSubj.asObservable();
  booksList$ = this.bookState$.pipe(
    map((state) => state.booksList),
    distinctUntilChanged(),
    tap((v) => console.log('new booklist', v))
    );
  isLoading$ = this.bookState$.pipe(
    map((state) => state.isLoading),
    distinctUntilChanged(),
    tap((v) => console.log('new loading',v)));
  loadError$ = this.bookState$.pipe(
    map((state) => state.loadError),
    distinctUntilChanged(),
    tap((v) => console.log('new error',v)));

  private books: Book[] = [];
  constructor(private http: HttpClient) {}

  private setState(state: Partial<BookState>, actionName: string) {
    const currentState = this.bookStateSubj.value;
    const newState = { ...currentState, ...state };
    this.bookStateSubj.next(newState);
    this.stateHistory.push({action: actionName, state: newState });
    console.log(this.stateHistory);
  }


  fetchBooks(query = '') {
    this.setState({ isLoading: true }, 'FETCH_BOOKS');

    this.http.get<Book[]>('/api/books', {
      params: {
        q: query,
      },
    }).subscribe(books => {
      this.setState({ booksList: books, isLoading: false}, 'FETCH_BOOKS_SUCCESS');
    }, () => this.setState({ loadError: 'Cannot load books. Try again later.', isLoading: false}, 'FETCH_BOOKS_ERROR'));
  }



  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  filterBooks(query): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books', {
      params: {
        q: query,
      },
    });
  }
}
