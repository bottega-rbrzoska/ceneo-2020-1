import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestItemComponent } from './test-item/test-item.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { RxTestComponent } from './rx-test/rx-test.component';
import { TestFormComponent } from './test-form/test-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestComponent, TestItemComponent, TestDetailsComponent, RxTestComponent, TestFormComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
