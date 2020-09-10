import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalTestService } from '../core/global-test.service';
import { TestUser } from '../models/test-user.interface';

@Component({
  selector: 'cn-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestComponent implements OnInit {

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
