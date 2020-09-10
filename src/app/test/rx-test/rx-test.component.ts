import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, of, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'cn-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  latestValue: boolean;
  @ViewChild('myInput', { static: true }) myInput: ElementRef;
  constructor() { }

  ngOnInit(): void {

    const subj = new Subject<number>();
    const bSubj = new BehaviorSubject<boolean>(false);

    this.latestValue = bSubj.value;

    const evObs$ = fromEvent(this.myInput.nativeElement, 'input');
    setTimeout(() => evObs$.pipe(map((ev: Event) => (ev.target as HTMLInputElement).value))
    .subscribe(ev => console.log(ev)), 3000);

    // this.getPromise().then(res => console.log(res), err => console.log('Error: ' + err))
    const observ1$ = new Observable<string>(obs => {
      obs.next('val1');
      obs.next('val2');
      obs.next('val3');
      obs.complete();
    });

    const observ2$ = of('val1', 'val2', 'val3');


    observ2$
    .pipe(
      tap(v => console.log('Before filter: ' + v)),
      filter(v => v.includes('2')),
      tap(v => console.log('After filter: ' + v)),
      map(v => v.toUpperCase())
    )
    .subscribe(v => console.log('SUBSCRIBE :' + v), e => console.log(e), () => console.log('completed'));


  }

  getPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        reject('o fu****ck');
      }, 3000);
      setTimeout(() => {
        resolve('koniec liczenia2');
      }, 5000);
    });
  }

}
