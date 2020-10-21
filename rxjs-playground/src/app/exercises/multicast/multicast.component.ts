import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, timer } from 'rxjs';
import { share } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnInit {

  listeners = [];
  logStream$ = new ReplaySubject();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) { }

  ngOnInit() {
    /*******************************/

    // this.measureValues$ = this.mvs.getValues().pipe(share());
    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1));

    // this.measureValues$ = new Subject();
    // this.measureValues$ = new BehaviorSubject(0); // initial value
    this.measureValues$ = new ReplaySubject(5); // buffer size

    this.mvs.getValues().subscribe(this.measureValues$);

    /*
    // Übungen zu Subjects
    const sub$ = new Subject();

    sub$.subscribe(e => console.log('1:', e));
    sub$.subscribe(e => console.log('2:', e));
    sub$.subscribe(e => console.log('3:', e));

    sub$.next(5);
    sub$.next(4);

    const foo$ = timer(0, 1000);
    const observer = {
      next: e => sub$.next(e),
      error: e => sub$.error(e),
      complete: () => sub$.complete(),
    };
    foo$.subscribe(sub$);
    */

    /*******************************/
  }

  addListener() {
    this.listeners.push(this.es.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString(5);
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
