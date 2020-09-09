import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TestUser } from '../models/test-user.interface';

@Component({
  selector: 'cn-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestComponent implements OnInit {

  users: TestUser[] = [
    { age: 67, name: 'Alojzy' },
    { age: 69, name: 'Helga', admin: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
