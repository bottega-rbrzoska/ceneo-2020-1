import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalTestService } from '../core/global-test.service';
import { TestUser } from '../models/test-user.interface';

@Component({
  selector: 'cn-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  products = [
    {
      name: 'prod1',
      price: 1.99
    },
    {
      name: 'prod2',
      price: 2.99
    }
  ];
  checkModel: any = { left: false, middle: true, right: false };
  showTestContainer = false;
  config$: Observable<any>;
  users: TestUser[] = [
    { age: 67, name: 'Alojzy' },
    { age: 69, name: 'Helga', admin: true }
  ];

  constructor(private globalTestService: GlobalTestService) {
    this.config$ = this.globalTestService.getConfig();
   }

  ngOnInit(): void {
  }

  handleSendName(name) {
    alert(name);
  }

  handleSave(data) {
    console.log(data)
    this.globalTestService.saveTestData(data).subscribe(() => {
      console.log('done!')
    });
  }

}
