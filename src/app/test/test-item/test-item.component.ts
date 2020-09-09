import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestUser } from 'src/app/models/test-user.interface';

@Component({
  selector: 'cn-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {

  @Input() testUser: TestUser;
  @Output() sendName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.sendName.emit(this.testUser.name.toUpperCase());
  }
}
