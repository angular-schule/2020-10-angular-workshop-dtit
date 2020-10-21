import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, of } from 'rxjs';
import { scan, reduce, startWith } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /******************************/

    this.score$.pipe(
      scan((acc, item) => acc + item, 0)
    ).subscribe(score => this.currentScore = score);

    this.score$.pipe(
      reduce((acc, item) => acc + item, 0)
    ).subscribe(score => this.finalScore = score);

    /******************************/
    // NgRx / Redux
    of(
      { type: 'SETTITLE', payload: 'Angular' },
      { type: 'SETYEAR', payload: '2016' },
      { type: 'SETNAME', payload: 'Ferdinand' },
      { type: 'SETYEAR', payload: '2020' },
      { type: 'SETNAME', payload: 'Malcher' },
    ).pipe(
      scan((state, msg) => {
        switch (msg.type) {
          case 'SETTITLE': return { ...state, title: msg.payload };
          case 'SETYEAR': return { ...state, year: msg.payload };
          case 'SETNAME': return { ...state, name: msg.payload };
        }
      }, {})
    ).subscribe(e => console.log(e))


    /******************************/

    this.score$.subscribe({
      next: value => this.logStream$.next(value),
      complete: () => this.logStream$.next('❌ COMPLETED')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
