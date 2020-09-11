import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { SelectDirective } from './select.directive';



@NgModule({
  declarations: [TestDirective, SelectDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirective,
    SelectDirective
  ]
})
export class SharedModule { }
