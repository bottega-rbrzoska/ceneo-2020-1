import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxTestComponent } from './rx-test/rx-test.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'rx', component: RxTestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
