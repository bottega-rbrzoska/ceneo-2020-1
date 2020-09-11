import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', loadChildren: () => import('./test/test.module').then( m => m.TestModule)},
  { path: 'books', loadChildren: () => import('./books/books.module').then( m => m.BooksModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule), canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
