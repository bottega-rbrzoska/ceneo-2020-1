import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestItemComponent } from './test-item/test-item.component';
import { TestDetailsComponent } from './test-details/test-details.component';


@NgModule({
  declarations: [TestComponent, TestItemComponent, TestDetailsComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
