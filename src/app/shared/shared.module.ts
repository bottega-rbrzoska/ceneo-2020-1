import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { SelectDirective } from './select.directive';
import { MyStructDirective } from './my-struct.directive';



@NgModule({
  declarations: [TestDirective, SelectDirective, MyStructDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirective,
    SelectDirective,
    MyStructDirective
  ]
})
export class SharedModule { }
