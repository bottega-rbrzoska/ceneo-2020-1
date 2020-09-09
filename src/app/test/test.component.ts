import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalTestService } from '../core/global-test.service';
import { TestUser } from '../models/test-user.interface';

@Component({
  selector: 'cn-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestComponent implements OnInit {

  config;
  users: TestUser[] = [
    { age: 67, name: 'Alojzy' },
    { age: 69, name: 'Helga', admin: true }
  ];

  constructor(public globalTestService: GlobalTestService) {
    this.config = this.globalTestService.getConfig();
   }

  ngOnInit(): void {
  }

  handleSendName(name) {
    alert(name);
  }

}
