import { Component } from '@angular/core';
import { from, interval, Observable, of, throwError, timer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    const vielfache3geradzahlig = interval(1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    );

    vielfache3geradzahlig.subscribe(e => console.log(e));

    // Observable erstellen
    /*const myObs$ = new Observable((o) => {
      const foo = 5;

      o.next(foo + foo);
      o.next(2);

      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 3000);
    });

    // Observable nutzen
    const observer = {
      next: e => console.log(e),
      error: err => console.error('ERR', err),
      complete: () => console.log('C')
    };

    myObs$.subscribe(observer);
    /////////

    myObs$.subscribe({
      next: e => console.log('HALLO', e)
    });*/
  }
}
