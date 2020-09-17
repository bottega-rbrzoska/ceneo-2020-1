import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { SelectDirective } from './select.directive';
import { MyStructDirective } from './my-struct.directive';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TestPipe } from './test.pipe';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { SharedUiModule } from 'shared-ui';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [TestDirective, SelectDirective, MyStructDirective, TestPipe, ButtonComponent, CardComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    SharedUiModule,
    BsDropdownModule
  ],
  exports: [
    TestDirective,
    SelectDirective,
    MyStructDirective,
    TestPipe,
    ButtonsModule,
    ButtonComponent,
    CardComponent,
    SharedUiModule,
    BsDropdownModule
  ]
})
export class SharedModule {}
