import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AuthState } from 'src/app/models/authState.interface';

@Component({
  selector: 'cn-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() data: AuthState;
  obs$ = interval(1000);
  constructor( private cdr: ChangeDetectorRef) {

    cdr.detach();
    this.obs$.subscribe(v => {
      cdr.detectChanges();
    })
  }

  ngOnInit(): void {
  }

  change() {
    console.log('change')
  }

  handleClick() {}

}
