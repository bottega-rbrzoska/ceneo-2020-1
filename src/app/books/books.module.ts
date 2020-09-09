import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksItemComponent } from './books-item/books-item.component';
import { BooksService } from './books.service';


@NgModule({
  declarations: [BooksListComponent, BooksDetailsComponent, BooksItemComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  providers: [BooksService]
})
export class BooksModule { }
