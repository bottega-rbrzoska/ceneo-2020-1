import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { SelectDirective } from './select.directive';
import { MyStructDirective } from './my-struct.directive';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [TestDirective, SelectDirective, MyStructDirective],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    TestDirective,
    SelectDirective,
    MyStructDirective,
    ButtonsModule
  ]
})
export class SharedModule { }
