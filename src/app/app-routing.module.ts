import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'test', loadChildren: () => import('./test/test.module').then( m => m.TestModule)},
  { path: 'books', loadChildren: () => import('./books/books.module').then( m => m.BooksModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule), canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
