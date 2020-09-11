import { Component, OnInit } from '@angular/core';
import { AuthState } from 'src/app/models/authState.interface';

@Component({
  selector: 'cn-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentData: AuthState = {
    role: 'admin',
    username: 'Tester'
  };
  constructor() { }

  ngOnInit(): void {
  }

  changeData() {
    this.parentData = { ...this.parentData, username: 'New Tester' }
  }

}
