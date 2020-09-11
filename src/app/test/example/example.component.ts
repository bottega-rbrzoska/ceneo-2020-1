import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cn-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  show = false;
  items = ['example1', 'example2'];
  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(): void {
    this.show = !this.show;
  }

}
