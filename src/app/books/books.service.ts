import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.interface';

@Injectable()
export class BooksService {

  private books: Book[] = [];
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  filterBooks(query): Observable<Book[]> {

    return this.http.get<Book[]>('/api/books', {
      params: {
        q: query
      }
    });
  }
}
